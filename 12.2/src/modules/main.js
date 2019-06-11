/* import {Clock} from "./clock.js"; */
import {Tabs} from "./tabs.js";
/* import {Stopwatch} from "./stopwatch.js";
import {Timer} from "./timer.js"; */
import {StopwatchTimer} from "./stopwatchTimer.js";
import {ClassHelper} from './classHelper.js';


/* const clock = new Clock(); */
const tabs = new Tabs();
const stopwatchTimer = new StopwatchTimer();
/* const stopwatch = new Stopwatch();
const timer = new Timer(); */


function init() {
    /* clock.init(); */
    tabs.init();
    stopwatchTimer.init('stopwatch', 0);
    /* timer.init(); */
}
init();