//@format
import htm from "htm";
import vhtml from "vhtml";

import Header from "./components/header.mjs";
import Sidebar from "./components/sidebar.mjs";
import Footer from "./components/footer.mjs";
import Head from "./components/head.mjs";

const html = htm.bind(vhtml);

export default async function score(theme, identity) {
  const path = "/score";
  return html`
    <html lang="en" op="news">
      <head>
        ${Head}
        <title>Check My OG Score</title>
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
                <td style="padding: 10px; font-size: 16px;">
                  <form id="ogScoreForm">
                    <input
                      type="text"
                      id="walletAddress"
                      placeholder="Enter Wallet Address or ENS Domain"
                    />
                    <button type="submit">Check my OG Score</button>
                  </form>
                  <div id="result"></div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        ${Footer(theme)}
      </body>
      <script type="text/plain" id="ogScoreScript">
        document
          .getElementById("ogScoreForm")
          .addEventListener("submit", async function fetchOGScore(event) {
            event.preventDefault();
            const walletAddress =
              document.getElementById("walletAddress").value;
            const apiUrl =
              "https://www.chainstory.xyz/api/story/getStoryFromCache?walletId=" +
              encodeURIComponent(walletAddress);

            try {
              const response = await fetch(apiUrl);
              const data = await response.json();
              const story = data.story;

              let resultText =
                "Culture Rank: " +
                story.cultureRank +
                "\\nDeFi Rank: " +
                story.defiRank +
                "\\nVibe Rank: " +
                story.vibeRank +
                "\\nCommunity Rank: " +
                story.communityRank +
                "\\nTotal Gas Spent: " +
                story.totalGasSpent +
                "\\nNumber of Transactions: " +
                (story.numberofTxns !== null ? story.numberofTxns : "N/A") +
                "\\nOverall Score: " +
                story.overallScore;

              document.getElementById("result").innerHTML =
                "<pre>" + resultText + "</pre>";
            } catch (error) {
              console.error("Error fetching OG Score:", error);
              document.getElementById("result").innerText =
                "Error fetching data.";
            }
          });
      </script>
      <script>
        document.getElementById("ogScoreScript").type = "text/javascript";
      </script>
    </html>
  `;
}
