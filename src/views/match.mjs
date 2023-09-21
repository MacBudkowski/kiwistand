import * as store from "../store.mjs";
import htm from "htm";
import vhtml from "vhtml";
import * as registry from "../chainstate/registry.mjs";
import { classify } from "./upvotes.mjs"; // Import classify function from upvotes.mjs

const html = htm.bind(vhtml);

export default async function (trie, theme) {
  const user1 = "0x3e6c23CdAa52B1B6621dBb30c367d16ace21F760";
  const user2 = "0x09cc4B3a27E3715596c5eDE07E95Da490340D27a";

 // Fetch upvotes
const allowlist = await registry.allowlist();
const delegations = await registry.delegations();
const user1PostsRaw = await store.posts(trie, null, null, JSON.parse, null, allowlist, delegations, user1);
const user2PostsRaw = await store.posts(trie, null, null, JSON.parse, null, allowlist, delegations, user2);

// Classify posts and filter upvotes
const user1Actions = classify(user1PostsRaw);
const user2Actions = classify(user2PostsRaw);
const user1UpvotesRaw = user1Actions.filter(action => action.verb === "upvote").map(action => action.message);
const user2UpvotesRaw = user2Actions.filter(action => action.verb === "upvote").map(action => action.message);

// Compare upvotes
const commonUpvotes = user1UpvotesRaw.filter(upvote1 =>
  user2UpvotesRaw.some(upvote2 => upvote2.href === upvote1.href)
);


// Count the number of common upvotes
const commonUpvotesCount = commonUpvotes.length;

}
// Display results
return html`
  <div>
    <h1>You and ${user2} upvoted ${commonUpvotesCount} links together:</h1>
    <ul>
      ${commonUpvotes.map(upvote => html`<li><a href="${upvote.href}">${upvote.title}</a></li>`)}
    </ul>
  </div>
`;

