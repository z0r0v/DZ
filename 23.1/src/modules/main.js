function delay(ms){
  return Promise.resolve().then( () => {
    return new Promise(function(resolve, reject){
      setTimeout(resolve(), ms);
    })
  })
};

delay(1000).then(function(ms) {
  console.log(ms);
});


