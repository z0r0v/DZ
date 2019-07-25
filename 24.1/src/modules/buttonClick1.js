import { Logger } from "./logger.js";

class ButtonClick1 {
  constructor(name) {
    this.name = name;
    this.htmlElements = { btn: document.querySelector("button") };
  }
  run = () => {
    const before = new Date().getTime();
    return new Promise((resolve, reject) => {
      this.htmlElements.btn.addEventListener("click", () => {
        const after = new Date().getTime();
        resolve(new Logger(this.name, before, after));
      });
    });
  };
}

export { ButtonClick1 };
