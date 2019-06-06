import {Clock} from "./clock.js";
import {Tabs} from "./tabs.js";
import {Stopwatch} from "./stopwatch.js";
import {Timer} from "./timer.js";



const clock = new Clock();
const tabs = new Tabs();
const stopwatch = new Stopwatch();
const timer = new Timer();



function init() {
    clock.init();
    tabs.init();
    stopwatch.init();
    timer.init();
}

init();