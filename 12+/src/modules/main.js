import {Clock} from "./clock.js";
import { Tabs } from "./tabs.js";
import { StopwatchTimer } from "./stopwatchTimer.js";

const clock = new Clock();
const tabs = new Tabs();
// Включаем stopwatch
/* const stopwatch = new StopwatchTimer("stopwatch", 0); */
// Включаем timer
const timer = new StopwatchTimer("timer", 300);


function init() {
  clock.init();
  tabs.init();
}
init();
