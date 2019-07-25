import { Promise2 } from './promise2.js';

function AsyncAwait1(name) {
  this.name = name;
}

AsyncAwait1.prototype.run = async function run(url) {
  let url2 = url;
  let promise2 = new Promise2(this.name);
  let logger = await promise2.run(url2);
  return logger;
};

export { AsyncAwait1 };