import log from './logger.js'

  // makeSyncDelay closure in  module syncDelay
const makeSyncDelay = (name, seconds)=>{
   // before closure in  makeSyncDelay
  const before = new Date().getTime();
   // j closure in  one for
  for(let j = 0; j < seconds; j++){
     // i closure in  twice for
    for(let i = 0; i < 800000000; i++ ){
       // a closure in  twice for
      let a = 123;
    }
  }
     // after closure in  makeSyncDelay
const after = new Date().getTime();
log(name, before, after);
}




export {makeSyncDelay};