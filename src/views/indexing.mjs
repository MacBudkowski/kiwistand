//@format
import htm from "htm";
import vhtml from "vhtml";

import Header from "./components/header.mjs";
import Sidebar from "./components/sidebar.mjs";
import Footer from "./components/footer.mjs";
import Head from "./components/head.mjs";

const html = htm.bind(vhtml);

const path = "/kiwipass-mint";

export default async function (theme, userAddress, transactionHash) {
  return html`
    <html lang="en" op="news">
      <head>
        ${Head}
        <style>
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .share-button {
            background-color: black;
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: flex;
            font-size: 0.9rem;
            cursor: pointer;
            border-radius: 3px;
            font-family: "Helvetica", "Arial", sans-serif;
            justify-content: center;
            align-items: center;
          }

          .container {
            width: 100%;
            box-sizing: border-box; /* This ensures padding doesn't affect the overall width */
          }

          #hnmain {
            width: 100%; /* Ensures the main content area also takes full width */
          }

          .header {
            text-align: center;
            margin-bottom: 20px;
          }

          .header h1 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          // .content-text {

          //   padding-left: 20px; /* or any other value you prefer */
          //   padding-right: 20px; /* or any other value you prefer */

          // }

          .content-text {
            max-width: 720px; /* Adjust as needed */
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          @media screen and (max-width: 768px) {
            .content-text {
              max-width: 100%;
              padding-left: 10px; /* Smaller padding for smaller screens */
              padding-right: 10px; /* Smaller padding for smaller screens */
            }
          }

          @media screen and (min-width: 769px) {
            .sidebar {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="sidebar">${Sidebar()}</div>
          <div id="hnmain">
            <table border="0" cellpadding="0" cellspacing="0" bgcolor="#f6f6ef">
              <tr>
                ${await Header(theme, path)}
              </tr>
              <tr>
                <td>
                  <div
                    style="display: flex; flex-direction: column; align-items: center; justify-content: start; height: 100vh; text-align: center;"
                  >
                    <h1
                      class="content-text"
                      style="color: limegreen; margin-bottom: 0;"
                    >
                      Minting in Progress
                    </h1>
                    <h2
                      class="content-text"
                      style="color: limegreen; margin-bottom: 0;"
                    >
                      Please keep this page open while we confirm your
                      transaction
                    </h2>
                    <h3 class="content-text" style="color: limegreen;">
                      (it might take a few minutes)
                    </h3>
                    <div
                      style="border: 16px solid #e6e6df; border-top: 16px solid limegreen; border-radius: 50%; width: 25vmin; height: 25vmin; animation: spin 2s linear infinite;"
                    ></div>
                    <h2 class="content-text" style="margin-bottom: 0;">
                      In the meantime you can share that you minted Kiwipass and
                      earn<span> </span>
                      <span style="color: limegreen;">0.000222 ETH</span> every
                      time someone mints via your link
                    </h2>
                    <p
                      class="content-text"
                      style="color: black; max-width: 600px; margin-bottom: 2rem;"
                    >
                      powered by<span> </span>
                      <a
                        href="https://support.zora.co/en/articles/8192123-understanding-protocol-rewards-on-zora"
                        target="_blank"
                        ><u>ZORA protocol rewards</u></a
                      >
                    </p>
                    <a
                      href="https://warpcast.com/~/compose?text=I+just+minted+a+@kiwi&embeds[]=https://news.kiwistand.com/kiwipass"
                      target="_blank"
                    >
                      <button
                        class="share-button"
                        style="background-color: #472a91; color: white; border: none; padding: 15px 30px; margin-bottom: 1rem; font-size: 1.2rem; font-weight: bold;"
                      >
                        Share on Warpcast
                      </button>
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fnews.kiwistand.com%2Fkiwipass&text=I%20just%20minted%20a%20kiwi%21"
                      target="_blank"
                    >
                      <button
                        class="share-button"
                        style="background-color: black; color: white; border: none; padding: 15px 30px; font-size: 1.2rem; font-weight: bold;"
                      >
                        Share on X
                      </button>
                    </a>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div style="display: none;">${Footer(theme, "/indexing")}</div>
      </body>
    </html>
  `;
}
