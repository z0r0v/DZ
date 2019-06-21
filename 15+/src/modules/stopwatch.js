import { StopwatchTimer } from "./stopwatchTimer.js";

function Stopwatch() {
  const array = ["stopwatch", 0];
  //apply всегда 2 параметра, для какого обьекта(this), и свойства какого масива (array);
  StopwatchTimer.apply(this, array);
  this.differenceSeconds = null;
}

Stopwatch.prototype = Object.create(StopwatchTimer.prototype);

Stopwatch.prototype.showInfo = function() {
  console.log(this);
};

Stopwatch.prototype.setSeconds = function() {
  this.differenceSeconds = Math.round(this.differenceMilliseconds / 1000) + this.totalSecondsDifference;
};

export { Stopwatch };
