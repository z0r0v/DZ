import { StopwatchTimer } from "./stopwatchTimer.js";
function Timer() {
  const callTimer = StopwatchTimer.bind(this, "timer", 300);
  callTimer();
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.showInfo = function() {
  console.log(this);
};

Timer.prototype.setSeconds = function() {
  this.differenceSeconds =
  this.totalSecondsDifference - Math.round(this.differenceMilliseconds / 1000);
        if (this.differenceSeconds === 0) {
          clearInterval(this.stopwatchInterval);
          this.htmlElements.buttonStop.classList.add("disabled");
        }
};
export { Timer };
