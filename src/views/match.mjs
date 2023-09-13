import * as store from "../store.mjs";
import htm from "htm";
import vhtml from "vhtml";

const html = htm.bind(vhtml);

export default async function (trie, theme) {
    const user1 = "0x3e6c23CdAa52B1B6621dBb30c367d16ace21F760";
    const user2 = "0xee324c588ceF1BF1c1360883E4318834af66366d";  
  // Fetch upvotes
  const user1Upvotes = await store.posts(trie, null, null, JSON.parse, null, null, null, user1);
  const user2Upvotes = await store.posts(trie, null, null, JSON.parse, null, null, null, user2);

  // Compare upvotes
  const commonUpvotes = user1Upvotes.filter(upvote1 =>
    user2Upvotes.some(upvote2 => upvote2.href === upvote1.href)
  );

  // Display results
  return html`
    <div>
      <h1>You and ${user2} upvoted the same links:</h1>
      <ul>
        ${commonUpvotes.map(upvote => html`<li><a href="${upvote.href}">${upvote.title}</a></li>`)}
      </ul>
    </div>
  `;
}