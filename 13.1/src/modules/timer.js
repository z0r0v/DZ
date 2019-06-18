import { StopwatchTimer } from "./stopwatchTimer.js";
function Timer() {
  StopwatchTimer.call(this, "timer", 300);
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.showInfo = function() {
  console.log(this);
};

export { Timer };
