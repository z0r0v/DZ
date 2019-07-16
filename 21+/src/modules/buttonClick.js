import log from './logger.js'

   // htmlElements closure in  module addEventListener

const htmlElements = {
  button:document.querySelector("#button"),
};

   // addEventListener closure in  module addEventListener
const addEventListener = (name) => {

   // doSomething closure in  addEventListener
  const doSomething = () => {
      // after closure in  doSomething
    const after = new Date().getTime();
    log(name, before, after);
  }
    // before closure in  addEventListener
  const before = new Date().getTime();
  htmlElements.button.addEventListener('click', doSomething);
};


export {addEventListener};
