import log from "./logger.js";

const jQuery = () => {
   // url, name, before closure in  jQuery
  const url = "https://jsonplaceholder.typicode.com/photos";
  const name = "jQuery:";
  const before = Date.now();
   // callback closure in  jQuery
  const callback = () => {
      // after closure in  callback
    const after = Date.now();
    log(name, before, after);
  }
  $.getJSON(url,"json",callback);
}



export {jQuery};