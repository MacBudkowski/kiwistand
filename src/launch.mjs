// @format
import { env, exit } from "process";

import { boot as crawl } from "@attestate/crawler";

import { start, subscribe } from "./index.mjs";
import log from "./logger.mjs";
import config from "./config.mjs";
import * as messages from "./topics/messages.mjs";
import * as roots from "./topics/roots.mjs";
import { handlers } from "./index.mjs";
import * as api from "./api.mjs";
import * as http from "./http.mjs";
import * as store from "./store.mjs";
import mintCrawlPath from "./chainstate/mint.config.crawler.mjs";
import delegateCrawlPath from "./chainstate/delegate.config.crawler.mjs";
import * as registry from "./chainstate/registry.mjs";
import * as karma from "./karma.mjs";
import * as newest from "./views/new.mjs";
import * as images from "./views/images.mjs";

const trie = await store.create();

crawl(mintCrawlPath);
crawl(delegateCrawlPath);
const node = await start(config);

// NOTE: We're passing in the trie here as we don't want to make it globally
// available to run more than one node in the tests
messages.handlers.message = messages.handlers.message(trie);
roots.handlers.message = roots.handlers.message(trie, node);

await subscribe(
  node,
  handlers.node,
  handlers.connection,
  handlers.protocol,
  [messages, roots],
  trie,
);
await api.launch(trie, node);
await http.launch(trie, node);

// NOTE: This request queries all messages in the database to enable caching
// when calling ecrecover on messages' signatures
const from = null;
const amount = null;
const startDatetime = null;
const parser = JSON.parse;
const allowlist = await registry.allowlist();
const delegations = await registry.delegations();
const href = null;
const type = "amplify";
const posts = await store.posts(
  trie,
  from,
  amount,
  parser,
  startDatetime,
  allowlist,
  delegations,
  href,
  type,
);
try {
  store.cache(posts);
} catch (err) {
  log(
    `launch: An irrecoverable error during upvote caching occurred. "${err.toString()}`,
  );
  exit(1);
}
await newest.recompute(trie);
await images.recompute(trie);
karma.count(posts);
