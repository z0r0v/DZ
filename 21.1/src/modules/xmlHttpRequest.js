import log from './logger.js'

  // runXhr closure in  module runXhr

const runXhr = (name, url) => {
  // before closure in runXhr
  const before = new Date().getTime();
    // xmr closure in runXhr
  const xmr = new XMLHttpRequest();
  xmr.open("GET", url);
  xmr.onload = function() {
      // after closure in  xmr.onload
    const after = new Date().getTime();
    log(name, before, after);
  };
  // xmr.send closure in  runXhr
  xmr.send();
};

export default runXhr;
