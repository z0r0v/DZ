import {makeSyncDelay} from "./syncDelay.js";
import {runSetTimeOut} from "./setTimeout.js";
import runXhr from "./xmlHttpRequest.js";
import {addEventListener} from "./buttonClick.js";
import {promise} from "./promise.js";



const url1 = "https://jsonplaceholder.typicode.com/photos/1";
const url2 = "https://jsonplaceholder.typicode.com/photos/2";
const url3 = "https://jsonplaceholder.typicode.com/photos/3";


console.log("sync code start");

makeSyncDelay("delay", 4, true);
runSetTimeOut("stm", 80);
runXhr("url1", url1);
runXhr("url2", url2);
runXhr("url3", url3);
addEventListener('btn');




console.log('sync code end');