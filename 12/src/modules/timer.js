
const htmlElements = {
    output: document.querySelector('.tabs [data-mode = "timer"] .output'),
    buttonStart: document.querySelector('.tabs [data-mode = "timer"] .buttons .start'),
    buttonStop: document.querySelector('.tabs [data-mode = "timer"] .buttons .stop'),
    buttonReset: document.querySelector('.tabs [data-mode = "timer"] .buttons .reset'),
    divTimer: document.querySelector('.tabs [data-mode = "timer"]'),

    input: document.createElement('input'),
    inputButtonAplay: document.createElement('input'),
}

function addButtunsEvent(){
    htmlElements.buttonStart.addEventListener('click', runTimer);
    htmlElements.buttonReset.addEventListener('click', resetTimer);
    htmlElements.buttonStop.addEventListener('click', timerStopButton);

    htmlElements.output.addEventListener('dblclick', resrtsHidden);
    htmlElements.input.addEventListener('focusout', validateHhMm);
}
addButtunsEvent();

function addPropertiesElements(){
    htmlElements.input.placeholder = '00:00:00';
    htmlElements.input.type ='text';
    htmlElements.input.classList.add('hidden');
    
    htmlElements.inputButtonAplay.type = 'button';
    htmlElements.inputButtonAplay.value = 'APLAY';
    htmlElements.inputButtonAplay.classList.add('aplayButton');
    htmlElements.inputButtonAplay.classList.add('hidden');
}
addPropertiesElements();

function attachElements(){
    htmlElements.divTimer.prepend(htmlElements.inputButtonAplay);
    htmlElements.divTimer.prepend(htmlElements.input);
}
attachElements();


function resrtsHidden() {
    htmlElements.input.classList.remove('hidden');
    htmlElements.inputButtonAplay.classList.remove('hidden');
    htmlElements.input.value = '';
    htmlElements.input.classList.remove('borderRed', 'borderGreen');
    htmlElements.output.classList.add('hidden');
   
}

let startInterval, difference, startTime;
let userValue = null;
let isStarted = false;


/* Валидация */
function validateHhMm() {
    const isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(htmlElements.input.value);
    if (isValid && htmlElements.input.value !== '00:00:00') {
        htmlElements.input.classList.add('borderGreen'); 
        htmlElements.inputButtonAplay.addEventListener('click', onAplayButtonCliced);
    } else {
        htmlElements.input.classList.add('borderRed');
    }
    return isValid;
}

/* От суда новое значение */
function onAplayButtonCliced() {
    htmlElements.input.classList.add('hidden');
    htmlElements.inputButtonAplay.classList.add('hidden');
    htmlElements.output.classList.remove('hidden');
    let arrayInputElemetn = htmlElements.input.value.split(':');
    let difference = arrayInputElemetn[0] * 60*60*1000 + arrayInputElemetn[1] * 60000 + arrayInputElemetn[2] * 1000;
    userValue = difference;
    showTime();
}

/* Отсуда забрать */
export function checkTimeValue(){
    if (!isStarted) startTime = new Date().getTime();
        let current = new Date().getTime();
    if(userValue === null) {
        
        difference =  5*60*1000 + startTime - current;
    }
    else{
        difference = userValue + startTime - current;
        
    }
    if (difference <= 0) {
        clearInterval(startInterval);
        isStarted = false;
        
    }
    return difference;
}

/* Суда передать */
function showTime() {
    let difference = checkTimeValue() / 1000;
    let seconds = parseInt(difference % 60);
    let minutes = parseInt((difference / 60) % 60);
    let hours = parseInt((difference / 3600) % 60);
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

/* Тут опять проверить */
function runTimer() {
    startTime = new Date().getTime();
    isStarted = true;
    startInterval = setInterval(showTime, 50);
    htmlElements.buttonStart.setAttribute('disabled', 'disabled');
  

}

function timerStopButton() {
    clearInterval(startInterval);
    htmlElements.buttonStart.removeAttribute('disabled', 'disabled');
};

function resetTimer() {
    isStarted = true;
    timerStopButton();
    showTime();
}




function Timer() {};

Timer.prototype.init = function() {
    showTime();
};

export {Timer};
