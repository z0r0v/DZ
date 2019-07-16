import { log } from "./logger.js";

const runXhr = (name, url) => {
  const before = new Date().getTime();
  const xmr = new XMLHttpRequest();
  xmr.open("GET", url);

  xmr.onload = function() {
    const after = new Date().getTime();
    log(name, before, after);
  };
  xmr.send();
};

export default runXhr;
