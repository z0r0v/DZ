import * as exportInputModule from './input.js';

const exportInputModule ={};
const htmlElements = {
    output: document.querySelector('.tabs [data-mode = "timer"] .output'),
    buttonStart: document.querySelector('.tabs [data-mode = "timer"] .buttons .start'),
    buttonStop: document.querySelector('.tabs [data-mode = "timer"] .buttons .stop'),
    buttonReset: document.querySelector('.tabs [data-mode = "timer"] .buttons .reset'),
}

htmlElements.buttonStart.addEventListener('click', startTimer);
htmlElements.buttonReset.addEventListener('click', resetTimer);
htmlElements.buttonStop.addEventListener('click', timerStopButton);

let startInterval;

/* Проверка должна происходить после аплая*/
function checkTimeValue(){
    if(newObjTime.difference){
        objTime.difference = newObjTime.difference;
    }else{
        objTime.difference = 5*60;
    }
    return objTime.difference;
}


function showTime() {
    checkTimeValue();
    let seconds = parseInt(objTime.difference % 60);
    let minutes = parseInt((objTime.difference / 60) % 60);
    let hours = parseInt(((objTime.difference / 60) % 60) / 60 % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;
}


/* function defaultTime(){
    objTime.difference = 5*60;
} */

function runTimer() {
    let newDifference = --objTime.difference;
    let seconds = parseInt(newDifference % 60);
    let minutes = parseInt((newDifference / 60) % 60);
    let hours = parseInt(((newDifference / 60) % 60) / 60 % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;
    if (newDifference === 0) {
        clearInterval(startInterval);
    }
}

function startTimer() {
    startInterval = setInterval(runTimer, 1000);
    htmlElements.buttonStart.setAttribute('disabled', 'disabled');
}

function timerStopButton() {
    clearInterval(startInterval);
    htmlElements.buttonStart.removeAttribute('disabled', 'disabled');
};

function resetTimer() {
    timerStopButton();
    showTime();
}


function Timer() {};

Timer.prototype.init = function() {
    showTime();
};

export {Timer};
