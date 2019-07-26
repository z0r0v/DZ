class URLParser {
  constructor(url = window.location.href) {
    this.url = url;
  }

  provideParametersRegExp = () =>{
    const regExp = new RegExp('[?&]+([^=&]+)=([^&]*)', 'g');
    const result = {};
    this.url.replace(regExp, (match, key, value) => {
      result[key] = value;
    });
  return result;
  };

  provideParametersViaSplit = () => {
    const flinders = this.url.split('?');
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
      return result;
    }
  };
};


const urlParser = new URLParser('http://127.0.0.1:5500?a=1&b=&c=3');
console.log(urlParser.provideParametersRegExp());
console.log(urlParser.provideParametersViaSplit());



