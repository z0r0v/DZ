
  function Data() {}
  
  Data.prototype.getUsefulContents = function(url) {
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const a = JSON.stringify(myJson);
      JSON.parse(a);
      console.log( JSON.parse(a));
    });
  };
  
  export { Data };