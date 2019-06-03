const htmlElements = {
    output:document.querySelector('.container [data-mode = "timer"] .output'),
    buttonStart:document.querySelector('.container [data-mode = "timer"] .buttons .start'),
    buttonStop:document.querySelector('.container [data-mode = "timer"] .buttons .stop'),
    buttonReset:document.querySelector('.container [data-mode = "timer"] .buttons .reset'),
};


let  timerGo = function (){
    let difference = (new Date().getTime() - startTime) / 1000;
    let seconds = parseInt(difference % 60);
    let minutes = parseInt((difference / 60) % 60);
    let hours = parseInt(((difference / 60) % 60)/60 % 60);
    if(seconds < 10){seconds = '0' + seconds;}
    if(minutes < 10){minutes = '0' + minutes;}
    if(hours < 10){hours = '0' + hours;}
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;   
} 

function timerStartButton(){
    const startTime = new Date().getTime();
    timerGo();
}

function Stopwatch(){};

/* тут нужно подумать */
Stopwatch.prototype.init = function() {
    setInterval(timerStartButton, 1000);
    timerStartButton();
};


export {Stopwatch};