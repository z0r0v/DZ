function getJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    callback(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function Data() {

  
}

Data.prototype.getUsefulContents = function(url, callback) {
  getJSON(url, function(data) {
    callback(JSON.parse(data));
  });
};





function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}


data.getUsefulContents(url).then(callback),


export { Data };
