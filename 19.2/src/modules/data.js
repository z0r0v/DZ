function getJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    // функция асинхронного обратного вызова
    callback(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function Data() {}
Data.prototype.getUsefulContents = function(url, callback) {
  getJSON(url, function(data) {
    callback(JSON.parse(data));
  });
};

export { Data };
