
function getJSON(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      resolve(this.responseText);
    };
    xhr.send();
  });
}

  function Data() {}
  
  Data.prototype.getUsefulContents = function(url) {
    getJSON(url);
  };


  export { Data };