const printParams = function(url) {

  const parts = url.split('?');
  const result = {};

  if (parts.length === 2) {

    const rightPart = parts[1];

    const pairs = rightPart.split('&');
  
    pairs.forEach(pair => {

      const pairDetails = pair.split('=');
      const name = pairDetails[0];
      const value = pairDetails[1];
      result[name] = value;

    });
  }

  console.log(result);
};

printParams('https://www.youtube.com/watch?v=aUa2gaI3LQI&feature=share');
