import { Logger } from "./logger.js";

class promise2 {
  constructor(name) {
    this.name = name;
  }
  run = url => {
    const before = new Date().getTime();
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => {
        resolve();
      };
      xhr.send();
    }).then(() => {
      const after = new Date().getTime();
      return new Logger(this.name, before, after);
    });
  };
}

export { promise2 };
