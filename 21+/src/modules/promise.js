import log from "./logger.js";

// makePromise closure in  module makePromise
function MakePromise(name){
   // before closure in  makePromise
   const before = new Date().getTime();
  return new Promise(function(resolve){
      resolve(name)
    })
     // after closure in  makeSyncDelay


}

MakePromise.prototype.init = function(){
 
  makePromise("promise").then(function(ms) {
    log(name, before, after);
  });
  const after = new Date().getTime();

}




export {MakePromise};