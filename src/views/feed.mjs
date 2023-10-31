//@format
import { env } from "process";
import { URL } from "url";

import htm from "htm";
import vhtml from "vhtml";
import normalizeUrl from "normalize-url";
import { sub, differenceInMinutes, isBefore } from "date-fns";

import * as ens from "../ens.mjs";
import Header from "./components/header.mjs";
import SecondHeader from "./components/secondheader.mjs";
import ThirdHeader from "./components/thirdheader.mjs";
import Sidebar from "./components/sidebar.mjs";
import Footer from "./components/footer.mjs";
import Head from "./components/head.mjs";
import * as store from "../store.mjs";
import * as id from "../id.mjs";
import * as moderation from "./moderation.mjs";
import * as registry from "../chainstate/registry.mjs";
import log from "../logger.mjs";
import { EIP712_MESSAGE } from "../constants.mjs";
import Row, { extractDomain } from "./components/row.mjs";
import * as karma from "../karma.mjs";

const html = htm.bind(vhtml);

const itemAge = (timestamp) => {
  const now = new Date();
  const ageInMinutes = differenceInMinutes(now, new Date(timestamp * 1000));
  return ageInMinutes;
};

export function count(leaves) {
  const stories = {};

  leaves = leaves.sort((a, b) => a.timestamp - b.timestamp);
  for (const leaf of leaves) {
    const key = `${normalizeUrl(leaf.href)}`;
    let story = stories[key];

    if (!story) {
      story = {
        title: leaf.title,
        timestamp: leaf.timestamp,
        href: leaf.href,
        identity: leaf.identity,
        upvotes: 1,
        upvoters: [leaf.identity],
        index: leaf.index,
      };
      stories[key] = story;
    } else {
      if (leaf.type === "amplify") {
        story.upvotes += 1;
        story.upvoters.push(leaf.identity);
        if (!story.title && leaf.title) story.title = leaf.title;
      }
    }
  }
  return Object.values(stories);
}

const calculateScore = (votes, itemHourAge, gravity = 1.6) => {
  return (votes - 1) / Math.pow(itemHourAge, gravity);
};

export async function topstories(leaves) {
  return leaves
    .map((story) => {
      const score = calculateScore(story.upvotes, itemAge(story.timestamp));
      story.score = score;
      return story;
    })
    .sort((a, b) => b.score - a.score);
}

async function editors(leaves) {
  function parseConfig(config) {
    const copy = { ...config };
    copy.numberOfStories = parseInt(config.numberOfStories, 10);
    return copy;
  }

  function editorPicks(leaves, config, links) {
    const cacheEnabled = true;
    const editorStories = leaves.filter(
      // TODO: Should start using ethers.utils.getAddress
      ({ identity }) => identity.toLowerCase() === config.address.toLowerCase(),
    );

    if (links && Array.isArray(links) && links.length > 0) {
      return editorStories.filter(({ href }) =>
        links.includes(!!href && normalizeUrl(href)),
      );
    }
    return editorStories;
  }
  let response;
  try {
    response = (await moderation.getConfig("3wi"))[0];
  } catch (err) {
    log(`3wi: Couldn't get editor pick config: ${err.toString()}`);
    return {
      editorPicks: [],
      links: [],
      config: {
        name: "isyettoberevealed!",
        link: "https://anddoesnthaveawebsite.com",
      },
    };
  }
  const config = parseConfig(response);

  let links;
  try {
    links = await moderation.getConfig("editor_links");
  } catch (err) {
    log(`editor_links: Couldn't get editor pick config: ${err.toString()}`);
    return {
      editorPicks: [],
      links: [],
      config: {
        name: "isyettoberevealed!",
        link: "https://anddoesnthaveawebsite.com",
      },
    };
  }

  if (links && Array.isArray(links)) {
    links = links.map(({ link }) => !!link && normalizeUrl(link));
  }

  const from = null;
  const amount = null;
  const parser = JSON.parse;
  const picks = editorPicks(leaves, config, links);
  const stories = count(picks)
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, config.numberOfStories);
  return {
    editorPicks: stories,
    links,
    config,
  };
}

export async function index(trie, page) {
  const lookBack = sub(new Date(), {
    weeks: 3,
  });
  const from = null;
  const amount = null;
  const parser = JSON.parse;
  const lookBackUnixTime = Math.floor(lookBack.getTime() / 1000);
  const allowlist = await registry.allowlist();
  const delegations = await registry.delegations();

  let leaves = await store.posts(
    trie,
    from,
    amount,
    parser,
    lookBackUnixTime,
    allowlist,
    delegations,
  );
  const policy = await moderation.getLists();
  leaves = moderation.moderate(leaves, policy);

  const { editorPicks, config } = await editors(leaves);
  const editorLinks = editorPicks.map(
    ({ href }) => !!href && normalizeUrl(href),
  );

  const totalStories = parseInt(env.TOTAL_STORIES, 10);
  const countedStories = count(leaves);
  let storyPromises = await topstories(countedStories);

  let threshold = 1;
  let pill = true;
  const now = new Date();
  const parameters = await moderation.getFeedParameters();
  const old = sub(now, { hours: parameters.oldHours });
  const oldInMinutes = differenceInMinutes(now, old);
  const { fold } = parameters;
  do {
    const sample = storyPromises.filter(({ upvotes }) => upvotes > threshold);
    const sum = sample.slice(0, fold).reduce((acc, { timestamp }) => {
      const submissionTime = new Date(timestamp * 1000);
      const diff = differenceInMinutes(now, submissionTime);
      return acc + diff;
    }, 0);
    const averageAgeInMinutes = sum / fold;
    if (averageAgeInMinutes > oldInMinutes) {
      threshold--;
      pill = false;
      continue;
    } else {
      threshold++;
    }
  } while (pill);

  log(`Feed threshold for upvotes ${threshold}`);
  if (threshold <= parameters.replacementThreshold) {
    // NOTE: The replacementFactor is the number of old stories that we are
    // going to replace with super new stories (ones that haven't gained any
    // upvotes yet).
    let { replacementFactor } = parameters;
    const newStories = countedStories
      .filter(({ upvotes }) => upvotes === 1)
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 20)
      .map((story) => ({ ...story, userScore: karma.score(story.identity) }))
      .filter(({ timestamp }) => !isBefore(new Date(timestamp * 1000), old))
      .sort(
        (a, b) =>
          0.4 * (b.userScore - a.userScore) + 0.6 * (b.timestamp - a.timestamp),
      );
    if (replacementFactor > newStories.length) {
      log(
        `Downgrading replacementFactor of "${replacementFactor}" to new story length "${newStories.length}"`,
      );
      replacementFactor = newStories.length;
    }
    const oldStories = storyPromises
      .slice(0, 10)
      .sort((a, b) => a.timestamp - b.timestamp)
      .slice(0, replacementFactor)
      .reverse();
    for (let i = 0; i < oldStories.length; i++) {
      const index = storyPromises.indexOf(oldStories[i]);
      if (index !== -1) {
        storyPromises[index] = newStories[i];
      }
    }
    storyPromises.splice(10, 0, ...oldStories);
  } else {
    storyPromises = storyPromises.filter(({ upvotes }) => upvotes > threshold);
  }

  const start = totalStories * page;
  const end = totalStories * (page + 1);
  storyPromises = storyPromises.slice(start, end);

  const writers = await moderation.getWriters();

  let stories = [];
  for await (let story of storyPromises) {
    const ensData = await ens.resolve(story.identity);
    let avatars = [];
    for await (let upvoter of story.upvoters) {
      const profile = await ens.resolve(upvoter);
      if (profile.safeAvatar) {
        avatars.push(profile.safeAvatar);
      }
    }

    const isOriginal = Object.keys(writers).some(
      (domain) =>
        normalizeUrl(story.href).startsWith(domain) &&
        writers[domain] === story.identity,
    );

    stories.push({
      ...story,
      displayName: ensData.displayName,
      submitter: ensData,
      avatars: avatars,
      isOriginal,
    });
  }

  return {
    editorPicks,
    config,
    stories,
    start,
  };
}

export default async function (trie, theme, page, identity) {
  const path = "/";
  const { editorPicks, config, stories, start } = await index(trie, page);
  return html`
    <html lang="en" op="news">
      <head>
        ${Head}
        <meta
          name="description"
          content="Kiwi News is the prime feed for hacker engineers building a decentralized future. All our content is handpicked and curated by crypto veterans."
        />
      </head>
      <body>
        <div class="container">
          ${Sidebar(path)}
          <div id="hnmain">
            <table border="0" cellpadding="0" cellspacing="0" bgcolor="#f6f6ef">
              <tr>
                ${await Header(theme, identity)}
              </tr>
              <tr>
                ${ThirdHeader(theme, "top")}
              </tr>
              <tr>
                ${SecondHeader(theme, "top")}
              </tr>
              ${page === 0 && editorPicks.length > 0
                ? html` <tr style="background-color: #e6e6df;">
                    <td>
                      <p
                        style="color: black; padding: 0 10px 0 10px; font-size: 12pt; font-weight: bold;"
                      >
                        <span>Today's Editor's Picks by </span>
                        <a style="color:black;" href="${config.link}">
                          ${config.name}</a
                        >!
                      </p>
                    </td>
                  </tr>`
                : ""}
              ${page === 0 &&
              editorPicks.map(
                (story, i) => html`
                  <tr style="background-color: #e6e6df;">
                    <td>
                      <div style="padding: 10px 5px 0 10px;">
                        <div style="display: flex; align-items: stretch;">
                          <div
                            style="display: flex; align-items: center; justify-content: center; min-width: 40px;"
                          >
                            <a
                              href="#"
                              style="display: flex; align-items: center; min-height: 30px;"
                            >
                              <div
                                class="votearrowcontainer"
                                data-title="${story.title}"
                                data-href="${story.href}"
                                data-upvoters="${JSON.stringify(
                                  story.upvoters,
                                )}"
                                data-editorpicks="true"
                              >
                                <div>
                                  <div
                                    class="votearrow pulsate"
                                    style="color: rgb(130, 130, 130); cursor: pointer;"
                                    title="upvote"
                                  >
                                    ▲
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            style="display:flex; align-items: center; flex-grow: 1;"
                          >
                            <span>
                              <a
                                href="${story.href}"
                                target="_blank"
                                class="story-link"
                                style="line-height: 13pt; font-size: 13pt;"
                              >
                                ${story.title}
                              </a>
                              <span
                                style="padding-left: 5px; white-space: nowrap;"
                                >(${extractDomain(story.href)})</span
                              >
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                `,
              )}
              ${page === 0 && editorPicks.length > 0
                ? html` <tr style="height: 13px; background-color: #e6e6df;">
                    <td></td>
                  </tr>`
                : ""}
              <tr>
                <td>
                  <p
                    style="color: black; padding: 10px 10px 0 10px; font-size: 12pt; font-weight: bold;"
                  >
                    <span
                      >Community's Picks
                      ${page !== 0 ? html`(page: ${page})` : ""}</span
                    >
                  </p>
                </td>
              </tr>
              ${stories.map(Row(start))}
              <tr style="height: 50px">
                <td>
                  <a
                    style="padding: 20px 0 0 20px; font-size: 1.1rem;"
                    href="?page=${page + 1}"
                  >
                    More
                  </a>
                </td>
              </tr>
              <tr
                style="display: block; padding: 10px; background-color: ${theme.color}"
              >
                <td>
                  <span style="color: black;"
                    >Hungry for more links? Check out the
                  </span>
                  <span> </span>
                  <a href="/best" style="color: black;"
                    ><u>Best links of the week!</u></a
                  >
                </td>
              </tr>
            </table>
          </div>
        </div>
        ${Footer(theme, path)}
      </body>
    </html>
  `;
}
