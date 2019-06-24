import { StopwatchTimer } from "./stopwatchTimer.js";

function Stopwatch() {
  const array = ["stopwatch", 0];
  //apply всегда 2 параметра, для какого обьекта(this), и свойства какого масива (array);
  StopwatchTimer.apply(this, array);
  
//не ворк

const calculateDifferenceSeconds = function (differenceMilliseconds, totalSecondsDifference, stopwatchInterval){
    differenceSeconds = Math.round(differenceMilliseconds / 1000) + totalSecondsDifference;
    return differenceSeconds;
  }
 
}

Stopwatch.prototype = Object.create(StopwatchTimer.prototype);

Stopwatch.prototype.showInfo = function() {
  console.log(this);
};



export { Stopwatch };
