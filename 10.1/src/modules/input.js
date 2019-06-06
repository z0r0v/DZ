import * as exportTimerModule from './timer.js';

const htmlElements = {
    divTimer: document.querySelector('.tabs [data-mode = "timer"]'),
    output: document.querySelector('.tabs [data-mode = "timer"] .output'),
    input: document.createElement('input'),
    inputButtonAplay: document.createElement('input'),

};

htmlElements.output.addEventListener('dblclick', onOutputDbCleced);
htmlElements.input.addEventListener('focusout', validateHhMm);

    htmlElements.input.placeholder = '00:00:00';
    htmlElements.input.type ='text';
    htmlElements.input.classList.add('hidden');

    htmlElements.inputButtonAplay.type = 'button';
    htmlElements.inputButtonAplay.value = 'APLAY';
    htmlElements.inputButtonAplay.classList.add('aplayButton');
    htmlElements.inputButtonAplay.classList.add('hidden');

    htmlElements.divTimer.prepend(htmlElements.inputButtonAplay);
    htmlElements.divTimer.prepend(htmlElements.input);

function resrtsHidden() {
    htmlElements.input.classList.remove('hidden');
    htmlElements.inputButtonAplay.classList.remove('hidden');
    htmlElements.input.value = '';
    htmlElements.input.classList.remove('borderRed', 'borderGreen');
}

function onOutputDbCleced(){
    /* Сбрасываю  hidden */
    resrtsHidden();
    /* Ваешаю хайден на output */
    htmlElements.output.classList.add('hidden');
}

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

const newObjTime = {};


function onAplayButtonCliced() {
            htmlElements.input.classList.add('hidden');
            htmlElements.inputButtonAplay.classList.add('hidden');
            let arrayInputElemetn = htmlElements.input.value.split(':');
            htmlElements.output.classList.remove('hidden');
            newObjTime.difference = arrayInputElemetn[0] * (3, 6e+6) + arrayInputElemetn[1] * 60000 + arrayInputElemetn[2] * 1000;
          /* Нужно разобраться */
            /*  exportTimerModule.checkTimeValue(); */
            return newObjTime.difference;
}
