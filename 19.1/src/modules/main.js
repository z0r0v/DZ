function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve(ms), ms);
  });
}

delay(1000).then(function(ms) {
  console.log(ms);
});
