import { Logger } from "./logger.js";

class Fetch1 {
  constructor(name) {
    this.name = name;
  }
  run = url => {
    const before = new Date().getTime();
    return fetch(url).then(() => {
      const after = new Date().getTime();
      return new Logger(this.name, before, after);
    });
  };
}

export { Fetch1 };
