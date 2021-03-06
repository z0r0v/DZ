import log from "./logger.js";

 // name, before closure in  module promise
const name = "promis";
const before = new Date().getTime();
const promise = new Promise(function(resolve){
      resolve(name);
    })
    promise.then(function(name) {
       // after closure in  then
      const after = new Date().getTime();
    log(name, before, after);
  });



export {promise};