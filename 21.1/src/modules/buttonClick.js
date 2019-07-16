import log from './logger.js'

const htmlElements = {
  button:document.querySelector("#button"),
};

const addEventListener = (name) => {
  const before = new Date().getTime();
  htmlElements.button.addEventListener('click', doSomething);

  const doSomething = () => {
    const after = new Date().getTime();
    log(name, before, after);
  }
};

export {addEventListener};
