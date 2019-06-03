const htmlElements = {
    output:document.querySelector('.container [data-mode = "timer"] .output'),
    buttonStart:document.querySelector('.container [data-mode = "timer"] .buttons .start'),
    buttonStop:document.querySelector('.container [data-mode = "timer"] .buttons .stop'),
    buttonReset:document.querySelector('.container [data-mode = "timer"] .buttons .reset'),
}

htmlElements.buttonStart.addEventListener('click', startTimer);
htmlElements.buttonReset.addEventListener('click', resetTimer);
htmlElements.buttonStop.addEventListener('click', timerStopButton);


let difference;
let startInterval;

function defaultTime(){
    difference = 5*60;
    let seconds = parseInt(difference % 60);
    let minutes = parseInt((difference / 60) % 60);
    let hours = parseInt(((difference / 60) % 60)/60 % 60);
    if(seconds < 10){seconds = '0' + seconds;}
    if(minutes < 10){minutes = '0' + minutes;}
    if(hours < 10){hours = '0' + hours;}
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;
}
defaultTime();

function runTimer() {
    let newDifference = --difference;
    let seconds = parseInt(newDifference % 60);
    let minutes = parseInt((newDifference / 60) % 60);
    let hours = parseInt(((newDifference / 60) % 60)/60 % 60);
    if(seconds < 10){seconds = '0' + seconds;}
    if(minutes < 10){minutes = '0' + minutes;}
    if(hours < 10){hours = '0' + hours;}
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`; 
    if(newDifference === 0){
        clearInterval(startInterval);
    } 
}

function startTimer(){
    startInterval = setInterval(runTimer, 1000);
    htmlElements.buttonStart.setAttribute('disabled', 'disabled');
}

function timerStopButton (){
    clearInterval(startInterval);
    htmlElements.buttonStart.removeAttribute('disabled', 'disabled');
};

function resetTimer(){
    timerStopButton();
    defaultTime();
}


/* тут магия как работает не понимаю */
function Timer(){};
Timer.prototype.init = function(){};

export {Timer};