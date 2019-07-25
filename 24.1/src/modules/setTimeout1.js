import { Logger } from "./logger.js";

class SetTimeOut1 {
  constructor(name) {
    this.name = name;
    this.milliseconds = 90;
  }
  run = () => {
    const before = new Date().getTime();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const after = new Date().getTime();
        resolve(
          new Logger(this.name, before, after, `supposed: ${this.milliseconds}`)
        );
      }, this.milliseconds);
    });
  };
}
export { SetTimeOut1 };
