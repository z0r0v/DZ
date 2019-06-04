const htmlElements = {
    output:document.querySelector('.container [data-mode = "timer"] .output'),
    buttonStart:document.querySelector('.container [data-mode = "timer"] .buttons .start'),
    buttonStop:document.querySelector('.container [data-mode = "timer"] .buttons .stop'),
    buttonReset:document.querySelector('.container [data-mode = "timer"] .buttons .reset'),
    divTimer:document.querySelector('.container [data-mode = "timer"]'),
}

htmlElements.buttonStart.addEventListener('click', startTimer);
htmlElements.buttonReset.addEventListener('click', resetTimer);
htmlElements.buttonStop.addEventListener('click', timerStopButton);
htmlElements.output.addEventListener('dblclick', callInputField);

let difference;
let startInterval;

function callInputField(){
    /* Вешаем хайден на оутпут */
    htmlElements.output.classList.add('hidden');
    /* создаем елемент инпут */
    let inputElemetn = document.createElement('input');
    inputElemetn.type = 'text';
    inputElemetn.placeholder='00:00:00';
    /* Вставляем его в див */
    htmlElements.divTimer.appendChild(inputElemetn);

    
    /* Созадем кнопку */
    let inputButtonAplay = document.createElement('input');
    inputButtonAplay.type = 'button';
    inputButtonAplay.value = 'APLAY';
    /* вешаем клас для стилизации */
    inputButtonAplay.classList.add('aplayButton');
    /* Вешаем функуию которая будет принимать значение */
    inputButtonAplay.addEventListener('click', aplayTime);
    /* Вставляем кнопку в див */
    htmlElements.divTimer.appendChild(inputButtonAplay);

    /* функция принимающая значение инпута */
function aplayTime(){
    console.log(inputElemetn.value);
}

}

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