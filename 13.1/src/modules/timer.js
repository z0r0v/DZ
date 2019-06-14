import { StopwatchTimer } from "./stopwatchTimer.js";
function Timer() {
  StopwatchTimer.call(this, "timer", 300);
}

Timer.prototype = Object.create(StopwatchTimer.prototype);

Timer.prototype.showInfo = function() {
  // Сразу был Timer Задать вопрос а разница ?
  console.log(this);
};

export { Timer };
