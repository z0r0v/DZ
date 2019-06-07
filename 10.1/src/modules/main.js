import {Clock} from "./clock.js";
import {Tabs} from "./tabs.js";
import {Stopwatch} from "./stopwatch.js";
import {Timer} from "./timer.js";



const clock = new Clock();
const tabs = new Tabs();
const timer = new Timer();
const stopwatch = new Stopwatch();
    




function init() {
    clock.init();
    tabs.init();
    timer.init();
    stopwatch.init();
}
init();