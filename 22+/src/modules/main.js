
const provideParameters = (url) =>{

  const flinders = url.split('?');
  const result = {};

  if(flinders.lenght === 2) {

    const partRight = flinders[1];

    const couple = partRight.split('&');

    couple.forEach(element => {
     
      const detailsCouple = element.split('=');
      const name = detailsCouple[0];
      const value = detailsCouple[1];
      result[name] = value;

    });
    console.log(element);
  }
console.log(result);
}

provideParameters('https://www.youtube.com/watch?v=aUa2gaI3LQI&feature=share');