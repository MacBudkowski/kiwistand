import htm from "htm";
import vhtml from "vhtml";

const html = htm.bind(vhtml);

export default html`
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-21BKTD0NKN"
  ></script>
  <script src="ga.js"></script>
  <meta charset="utf-8" />
  <meta name="referrer" content="origin" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon.png" />
  <link rel="stylesheet" type="text/css" href="news.css" />
  <link rel="shortcut icon" href="favicon.ico" />
  <title>Kiwi News</title>
`;