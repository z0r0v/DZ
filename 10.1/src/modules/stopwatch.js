const htmlElements = {
    output:document.querySelector('.container [data-mode = "stopwatch"] .output'),
    buttonStart:document.querySelector('.container [data-mode = "stopwatch"] .buttons .start'),
    buttonStop:document.querySelector('.container [data-mode = "stopwatch"] .buttons .stop'),
    buttonReset:document.querySelector('.container [data-mode = "stopwatch"] .buttons .reset'),
};

    let stopwatchInterval;
    let startTime;

    htmlElements.buttonStart.addEventListener('click', timerStartButton);
    htmlElements.buttonReset.addEventListener('click', resetStopwatch);
    htmlElements.buttonStop.addEventListener('click', timerStopButton);

function timerStartButton(){
    htmlElements.buttonStart.setAttribute('disabled', 'disabled');
    startTime = new Date().getTime();
    stopwatchInterval = setInterval(runStopwatch, 1000);
}

function runStopwatch(){
    const difference = (new Date().getTime() - startTime) / 1000;
    let seconds = parseInt(difference % 60);
    let minutes = parseInt((difference / 60) % 60);
    let hours = parseInt(((difference / 60) % 60)/60 % 60);
    if(seconds < 10){seconds = '0' + seconds;}
    if(minutes < 10){minutes = '0' + minutes;}
    if(hours < 10){hours = '0' + hours;}
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`; 
}

function timerStopButton (){
    clearInterval(stopwatchInterval);
    htmlElements.buttonStart.removeAttribute('disabled', 'disabled');
};

function resetStopwatch(){
    timerStopButton();
    htmlElements.output.innerText = '00:00:00';
}


function Stopwatch(){};

Stopwatch.prototype.init = function(){
    runStopwatch();
    timerStartButton();
    timerStopButton ();
    resetStopwatch()
};

export {Stopwatch};