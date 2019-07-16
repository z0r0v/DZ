import log from './logger.js'

const makeSyncDelay = (name, seconds)=>{
  const before = new Date().getTime();

  for(let j = 0; j < seconds; j++){
    for(let i = 0; i < 800000000; i++ ){
      let a = 123;
    }
  }
const after = new Date().getTime();
log(name, before, after);
}




export {makeSyncDelay};