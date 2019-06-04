const htmlElements = {
    output: document.querySelector('.container [data-mode = "timer"] .output'),
    buttonStart: document.querySelector('.container [data-mode = "timer"] .buttons .start'),
    buttonStop: document.querySelector('.container [data-mode = "timer"] .buttons .stop'),
    buttonReset: document.querySelector('.container [data-mode = "timer"] .buttons .reset'),
    divTimer: document.querySelector('.container [data-mode = "timer"]'),
}

htmlElements.buttonStart.addEventListener('click', startTimer);
htmlElements.buttonReset.addEventListener('click', resetTimer);
htmlElements.buttonStop.addEventListener('click', timerStopButton);
htmlElements.output.addEventListener('dblclick', callInputField);

let difference;
let startInterval;

const inputElemetn = document.createElement('input');
inputElemetn.type = 'text';
inputElemetn.placeholder = '00:00:00';
inputElemetn.addEventListener('focusout', function () {
    validateHhMm(inputElemetn);
});
inputElemetn.classList.add('hidden');
htmlElements.divTimer.appendChild(inputElemetn);


const inputButtonAplay = document.createElement('input');
inputButtonAplay.type = 'button';
inputButtonAplay.value = 'APLAY';
inputButtonAplay.classList.add('aplayButton');
inputButtonAplay.classList.add('hidden');
htmlElements.divTimer.appendChild(inputButtonAplay);
inputButtonAplay.addEventListener('click', aplayTime);


function callInputField() {
    resrtsHidden();
    htmlElements.output.classList.add('hidden');
}

/* функция принимающая значение инпута */
function aplayTime() {
    validateHhMm(inputElemetn);
    calculateTime();
}


/* Валидация */
function validateHhMm(inputElemetn) {
    const isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(inputElemetn.value);

    if (isValid) {
        inputElemetn.classList.add('borderGreen');

    } else {
        inputElemetn.classList.add('borderRed');
    }
    return isValid;
}

/* преобразование из полученного значения */
function calculateTime() {
        htmlElements.output.classList.remove('hidden');
        inputElemetn.classList.add('hidden');
        inputButtonAplay.classList.add('hidden');

    if (validateHhMm(inputElemetn) === true) {
        let arrayInputElemetn = inputElemetn.value.split(':');
        difference = arrayInputElemetn[0] * (3, 6e+6) + arrayInputElemetn[1] * 60000 + arrayInputElemetn[2] * 1000;
        console.log(difference);
    }
    return difference;
}
console.log(difference);


function resrtsHidden() {
    inputElemetn.classList.remove('hidden');
    inputButtonAplay.classList.remove('hidden');
    inputElemetn.value = '';
    inputElemetn.classList.remove('borderRed', 'borderGreen');
}


function defaultTime() {
    difference = 5*60;
    /* Должно поменяться заначение тут */
    let seconds = parseInt(difference % 60);
    let minutes = parseInt((difference / 60) % 60);
    let hours = parseInt(((difference / 60) % 60) / 60 % 60);
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
defaultTime();


function runTimer() {
    let newDifference = --difference;
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
    defaultTime();
}


/* тут магия как работает не понимаю */
function Timer() {};
Timer.prototype.init = function () {};

export {
    Timer
};