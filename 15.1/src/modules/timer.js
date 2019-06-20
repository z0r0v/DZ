import { StopwatchTimer } from "./stopwatchTimer.js";
function Timer() {
  const callTimer = StopwatchTimer.bind(this, "timer", 300);
  callTimer();
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.showInfo = function() {
  console.log(this);
};

export { Timer };
