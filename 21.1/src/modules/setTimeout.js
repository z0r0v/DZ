import log from "./logger.js";

  // runSetTimeOut closure in  module runSetTimeOut
const runSetTimeOut = (name, milliseconds) => {
    // before closure in runSetTimeOut
  const before = new Date().getTime();

  const getLeadTime = () => {
      // after closure in getLeadTime
    const after = new Date().getTime();
    log(name, before, after, ` putative: ${milliseconds};`);
  };

  setTimeout(getLeadTime, milliseconds);
};
export { runSetTimeOut };
