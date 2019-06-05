/* Переработать */
const inputElemetn = document.createElement('input');
inputElemetn.type = 'text';
inputElemetn.placeholder = '00:00:00';
inputElemetn.classList.add('hidden');
inputElemetn.addEventListener('focusout', function () {
    validateHhMm(inputElemetn);
});

const inputButtonAplay = document.createElement('input');
inputButtonAplay.addEventListener('click', aplayTime);
inputButtonAplay.type = 'button';
inputButtonAplay.value = 'APLAY';
inputButtonAplay.classList.add('aplayButton');
inputButtonAplay.classList.add('hidden');

htmlElements.divTimer.prepend(inputElemetn);
htmlElements.divTimer.prepend(inputButtonAplay);

/* Переработать */
htmlElements.output.addEventListener('dblclick', callInputField);


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

/* функция принимающая значение инпута */
function aplayTime() {
    if (validateHhMm(inputElemetn) === true) {
    htmlElements.output.classList.remove('hidden');
    inputElemetn.classList.add('hidden');
    inputButtonAplay.classList.add('hidden');
    let arrayInputElemetn = inputElemetn.value.split(':');
    ojDifference.difference = arrayInputElemetn[0] * (3, 6e+6) + arrayInputElemetn[1] * 60000 + arrayInputElemetn[2] * 1000;
    }
}

/* Косячина гдето тут */
function differenceNotDefined(time) {
    if(time === undefined|| time === NaN){difference = 5*60;}
    else{difference = time;}
    return difference;
}
/* Скорее всего будет не нужна */
function resrtsHidden() {
    inputElemetn.classList.remove('hidden');
    inputButtonAplay.classList.remove('hidden');
    inputElemetn.value = '';
    inputElemetn.classList.remove('borderRed', 'borderGreen');
}
/* Скорее всего будет не нужна */
function callInputField() {
    resrtsHidden();
    htmlElements.output.classList.add('hidden');
}