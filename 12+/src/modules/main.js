import {Clock} from "./clock.js";
import { Tabs } from "./tabs.js";
import { StopwatchTimer } from "./stopwatchTimer.js";

const clock = new Clock();
const tabs = new Tabs();

const timer = new StopwatchTimer("timer", 5);
const stopwatch = new StopwatchTimer('stopwatch', 0);


function init() {
  clock.init();
  tabs.init();
}
init();
