import {ClassHelper} from './classHelper.js';

const htmlElements = {
    output:document.querySelector('.container [data-mode = "stopwatch"] .output'),
    buttonStart:document.querySelector('.container [data-mode = "stopwatch"] .buttons .start'),
    buttonStop:document.querySelector('.container [data-mode = "stopwatch"] .buttons .stop'),
    buttonReset:document.querySelector('.container [data-mode = "stopwatch"] .buttons .reset'),
    buttons: document.querySelectorAll('.container .tabs [data-mode="stopwatch"] .buttons button'),
};

    
    let startTime;
    let stopwatchInterval;
    let totalSecondsDifference = 0;
    let differenceSeconds = 0;

    let array = [];
    
   
function onStartTimerButtonClict(){
    ClassHelper.removeClass('disabled', htmlElements.buttons);
    ClassHelper.addClass('disabled', [htmlElements.buttonStart]);
    stopwatchInterval = setInterval(/* Тут интервал моей запуск таймера */, 1000);
    startTime = new Date().getTime();
}

function timerStopButton (){
    ClassHelper.removeClass('disabled', htmlElements.buttons);
    ClassHelper.addClass('disabled', [htmlElements.buttonStop]);
    clearInterval(stopwatchInterval);
    totalSecondsDifference = differenceSeconds;
};

function resetStopwatch(){
    ClassHelper.removeClass('disabled', htmlElements.buttons);
    ClassHelper.addClass('disabled', [htmlElements.buttonReset]);
    totalSecondsDifference = 0;
    startTime = new Date().getTime();
    clearInterval(stopwatchInterval);
    // Эта функция вызова функции в которой тикают часики
    // остановился тут
    onIntervalTick();
}


function runStopwatch(){
    let difference = (new Date().getTime() - startTime) / 1000;
    let seconds = parseInt(difference % 60);
    let minutes = parseInt((difference / 60) % 60);
    let hours = parseInt((difference / 3600) % 60);
    if(seconds < 10){seconds = '0' + seconds;}
    if(minutes < 10){minutes = '0' + minutes;}
    if(hours < 10){hours = '0' + hours;}
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;
}





function Stopwatch(){};

Stopwatch.prototype.init = function() {
    htmlElements.buttonStart.addEventListener('click', onStartTimerButtonClict);
    htmlElements.buttonReset.addEventListener('click', resetStopwatch);
    htmlElements.buttonStop.addEventListener('click', timerStopButton);
};

export {Stopwatch};