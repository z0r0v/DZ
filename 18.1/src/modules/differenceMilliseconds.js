import { startTime } from "./book.js";
import { htmlElements } from "./autoinfo.js";
//Пока не допер как разнести на разные модули
let differenceMilliseconds = 0;
let totalSecondsDifference = 0;
let differenceSeconds = 0;
const runTime = () => {
  differenceMilliseconds = new Date().getTime() - startTime;
  differenceSeconds =
    Math.round(differenceMilliseconds / 1000) + totalSecondsDifference;
  let seconds = parseInt(differenceSeconds % 60);
  let minutes = parseInt((differenceSeconds / 60) % 60);
  let hours = parseInt((differenceSeconds / 3600) % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  //Не могу вынести элемент в другой модуль
  htmlElements.time.innerText = `${hours}:${minutes}:${seconds}`;
};

function StopWotch() {}

StopWotch.prototype.init = function() {
  setInterval(runTime, 1000);
  runTime();
};
export {StopWotch};

