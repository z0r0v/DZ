import log from "./logger.js";

const name ="fetch:";

const  makefetch = (url)=>{
  
  const before = Date.now();

  fetch(url)
  .then(function(response) {
    response.json();

    const after = Date.now();

    log(name, before, after);

  })
}

export {makefetch}