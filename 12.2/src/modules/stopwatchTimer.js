import {ClassHelper} from './classHelper.js';


/* Тут значения */
let startTime;
let stopwatchInterval;
let differenceSeconds;
let totalSecondsDifference;


/* разобраться */
let dynamicFunc = function(a,b,c) {};

let dynamicFuncStopWotch = function(differenceMilliseconds, startTime) {
    const differenceMilliseconds = new Date().getTime() - startTime;
    differenceSeconds = differenceMilliseconds / 1000 + totalSecondsDifference;
};

let dynamicFuncTimer = function(differenceMilliseconds,startTime) {
    const differenceMilliseconds = new Date().getTime() - startTime;
    differenceSeconds = totalSecondsDifference - differenceMilliseconds / 1000;
};

htmlElements.buttonStart.addEventListener("click", onStartTimerButtonClict);
htmlElements.buttonReset.addEventListener("click", onClickedResetButtom);
htmlElements.buttonStop.addEventListener("click", onClickedButtonStop);


function onStartTimerButtonClict(){
    ClassHelper.removeClass('disabled', htmlElements.buttons);
    ClassHelper.addClass('disabled', [htmlElements.buttonStart]);
    stopwatchInterval = setInterval(runTime, 1000);
    startTime = new Date().getTime();
}

function onClickedButtonStop(){
    ClassHelper.removeClass('disabled', htmlElements.buttons);
    ClassHelper.addClass('disabled', [htmlElements.buttonStop]);
    clearInterval(stopwatchInterval);
    totalSecondsDifference = differenceSeconds;
};

function onClickedResetButtom(){
    ClassHelper.removeClass('disabled', htmlElements.buttons);
    ClassHelper.addClass('disabled', [htmlElements.buttonReset]);
    /* Тут подиннп значения */
    totalSecondsDifference = 0;
    startTime = new Date().getTime();
    clearInterval(stopwatchInterval);
    runTime();
}

function runTime(){
    /* разобраться */
    let result = dynamicFunc();
    let seconds = parseInt(differenceSeconds % 60);
    let minutes = parseInt((differenceSeconds / 60) % 60);
    let hours = parseInt((differenceSeconds / 3600) % 60);
    if(seconds < 10){seconds = `0${seconds}`}
    if(minutes < 10){minutes = `0${minutes}`}
    if(hours < 10){hours = `0${hours}`}
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;
}

/* Разобраться */
function initialize(mode) {
    switch(mode) {
    case 'stopWotch':  dynamicFunc = dynamicFuncStopWotch; break;
    case 'timer': dynamicFunc = dynamicFuncTimer; break;
    }
  }