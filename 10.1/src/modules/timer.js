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
let difference = 5*60;

function showTime() {
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

function runTimer() {
    difference = --difference;
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
    if (difference === 0) {
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
    difference = 5*60;
    timerStopButton();
    showTime();
}


function Timer() {};

Timer.prototype.init = function() {
    showTime();
};

export {Timer};
