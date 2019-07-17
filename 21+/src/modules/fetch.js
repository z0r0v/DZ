import log from "./logger.js";

  // name, before closure in  module fetch
const name ="fetch:";

const  makefetch = (url)=>{
  // before closure in  makefetch
  const before = Date.now();
  fetch(url)
  .then(function(response) {
    response.json();
 // after closure in  then
    const after = Date.now();
    log(name, before, after);
  })
}

export {makefetch}