import {makeSyncDelay} from "./syncDelay.js";
import {runSetTimeOut} from "./setTimeout.js";
import runXhr from "./xmlHttpRequest.js";
import {addEventListener} from "./buttonClick.js";
import {promise} from "./promise.js";
import {makefetch} from "./fetch.js";




const url1 = "https://jsonplaceholder.typicode.com/photos/1";
const url2 = "https://jsonplaceholder.typicode.com/photos/2";
const url3 = "https://jsonplaceholder.typicode.com/photos/3";


console.log("sync code start");

makeSyncDelay("delay:", 4, true);
runSetTimeOut("stm:", 80);
runXhr("url 1:", url1);
runXhr("url 2:", url2);
runXhr("url 3:", url3);
addEventListener('btn');
makefetch(url1);




console.log('sync code end');