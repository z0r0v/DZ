import { StopwatchTimer } from "./stopwatchTimer.js";

class Timer extends StopwatchTimer {
  constructor() {
    super("timer", 300);
  }
  showInfo() {
    console.log(this);
  }
}

export { Timer };

