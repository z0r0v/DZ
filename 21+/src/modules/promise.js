import log from "./logger.js";
// ОПИСАТЬ ЗАМЫКАНИЯ
const name = "promis";

const before = new Date().getTime();
const promise = new Promise(function(resolve){
      resolve(name);
    })
    promise.then(function(name) {
      const after = new Date().getTime();
    log(name, before, after);
  });



export {promise};