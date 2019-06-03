import {Clock} from "./clock.js";
import {Tabs} from "./tabs.js";


const clock = new Clock();
const tabs = new Tabs();


function init() {
    clock.init();
    tabs.init();
}

init();