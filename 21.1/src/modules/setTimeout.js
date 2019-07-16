import log from './logger.js'
const runSetTimeOut = (name, milliseconds)=>{
  const before = new Date().getTime();

  const getLeadTime = ()=>{
    const after = new Date().getTime();
    log(name, before, after, ` putative: ${milliseconds};`);
  }

  setTimeout(getLeadTime, milliseconds);

}
export {runSetTimeOut};
