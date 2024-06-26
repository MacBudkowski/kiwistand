import htm from "htm";
import vhtml from "vhtml";
const html = htm.bind(vhtml);
const share = (style) =>
  html`<svg
    style="${style}"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none" />
    <path
      d="M176,104h24a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H80"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    />
    <polyline
      points="88 64 128 24 168 64"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    />
    <line
      x1="128"
      y1="24"
      x2="128"
      y2="136"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    />
  </svg>`;
export default share;
