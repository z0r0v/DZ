import { StopwatchTimer } from "./stopwatchTimer.js";
function Timer() {
  const callTimer = StopwatchTimer.bind(this, "timer", 300);
  callTimer();

  //не ворк
  const calculateDifferenceSeconds = function(differenceMilliseconds, totalSecondsDifference, stopwatchInterval){
    differenceSeconds =
          totalSecondsDifference - Math.round(differenceMilliseconds / 1000);
        if (differenceSeconds === 0) {
          clearInterval(stopwatchInterval);
          htmlElements.buttonStop.classList.add("disabled");
        }
  }

}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.showInfo = function() {
  console.log(this);
};

export { Timer };
