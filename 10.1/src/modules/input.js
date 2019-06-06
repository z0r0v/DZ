
const htmlElements = {};
htmlElements.divTimer = document.querySelector('.tabs [data-mode = "timer"]');
htmlElements.output = document.querySelector('.tabs [data-mode = "timer"] .output'),
htmlElements.output.addEventListener('dblclick', onOutputDbCleced);




function createElementsInput(){
    htmlElements.input = document.createElement('input');
    htmlElements.input.placeholder = '00:00:00';
    htmlElements.input.type ='text';
    htmlElements.input.classList.add('hidden');

    htmlElements.inputButtonAplay = document.createElement('input');
    htmlElements.inputButtonAplay.type = 'button';
    htmlElements.inputButtonAplay.value = 'APLAY';
    htmlElements.inputButtonAplay.classList.add('aplayButton');
    htmlElements.inputButtonAplay.classList.add('hidden');

    htmlElements.divTimer.prepend(htmlElements.inputButtonAplay);
    htmlElements.divTimer.prepend(htmlElements.input);
    htmlElements.input.addEventListener('focusout', validateHhMm);
}


function resrtsHidden() {
    htmlElements.input.classList.remove('hidden');
    htmlElements.inputButtonAplay.classList.remove('hidden');
    htmlElements.input.value = '';
    htmlElements.input.classList.remove('borderRed', 'borderGreen');
}

function onOutputDbCleced(){
    /* Создаю элементы */
    createElementsInput();
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
            htmlElements.output.classList.remove('hidden');
            htmlElements.inputButtonAplay.classList.add('hidden');
            let arrayInputElemetn = htmlElements.input.value.split(':');
            difference = arrayInputElemetn[0] * (3, 6e+6) + arrayInputElemetn[1] * 60000 + arrayInputElemetn[2] * 1000;
}
console.log(difference);



function Input() {};
export {Input};