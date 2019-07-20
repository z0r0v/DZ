const provideParameters = function(url){
  const flinders = url.split('?');
  const result = {};
  if(flinders.length === 2) {
    const partRight = flinders[1];
    const cours = partRight.split('&');
    cours.forEach(cour => {
      const detailsCouple = cour.split('=');
      const name = detailsCouple[0];
      const value = detailsCouple[1];
      result[name] = value;
    });
  }
console.log(result);
};
provideParameters('https://www.youtube.com/watch?v=aUa2gaI3LQI&feature=share');