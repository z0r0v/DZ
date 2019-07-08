const ms = 1000;

function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

delay(ms).then(function() {
  console.log(ms);
});
