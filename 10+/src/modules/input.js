import {objTime} from './timer.js';

const htmlElements = {
    divTimer: document.querySelector('.tabs [data-mode = "timer"]'),
    output: document.querySelector('.tabs [data-mode = "timer"] .output'),
    input: document.createElement('input'),
    inputButtonAplay: document.createElement('input'),

};

export function addButtunsEvent(){
    htmlElements.output.addEventListener('dblclick', onOutputDbCleced);
    htmlElements.input.addEventListener('focusout', validateHhMm);
}
addButtunsEvent();


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


function onAplayButtonCliced() {
            htmlElements.input.classList.add('hidden');
            htmlElements.inputButtonAplay.classList.add('hidden');
            htmlElements.output.classList.remove('hidden');
            let arrayInputElemetn = htmlElements.input.value.split(':');
            let difference = arrayInputElemetn[0] * (3, 6e+6) + arrayInputElemetn[1] * 60000 + arrayInputElemetn[2] * 1000;
            checkTimeValue(difference);
            return objTime.difference;
}

export function checkTimeValue(value){
    if(value !== null){
    return objTime.difference = value;
    }
    else{
    return objTime.difference = 5*60;
    }
}