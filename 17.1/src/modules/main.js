import { Clock } from "./clock.js";
import { Tabs } from "./tabs.js";
import { Timer } from "./timer.js";
import { Stopwatch } from "./stopwatch.js";

const clock = new Clock();
const tabs = new Tabs();
const timer = new Timer();
const stopwatch = new Stopwatch();

stopwatch.showInfo();
timer.showInfo();

function init() {
  clock.init();
  tabs.init();
}
init();
