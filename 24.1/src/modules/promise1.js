import { Logger } from "./logger.js";

function Promise1(name) {
  this.name = name;
}

Promise1.prototype.run = function() {
  const before = new Date().getTime();
  return Promise.resolve().then(function() {
    return new Promise(function(resolve, reject) {
      const after = new Date().getTime();
      resolve(new Logger(this.name, before, after));
    });
  });
};
export { Promise1 };