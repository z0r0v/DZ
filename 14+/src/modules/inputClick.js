import { ClassHelper } from "./classHelper.js";
import { StopwatchTimer } from "./stopwatchTimer.js";
    
function InputClick() {
    const htmlElements = {
        outputTimer: document.querySelector('.container [data-mode = "timer"] .output'),
        divTimer: document.querySelector('.tabs [data-mode = "timer"]'),
    }

        htmlElements.outputTimer.addEventListener('dblclick', onClictInOutput);
 
        
        
        function createElement(){
        htmlElements.inputButtonAplay = document.createElement('input'),
        htmlElements.input = document.createElement('input'),
        
        htmlElements.inputButtonAplay.addEventListener('click', validateHhMm);
        htmlElements.input.addEventListener('focusout', validateHhMm);
        htmlElements.divTimer.prepend(htmlElements.inputButtonAplay);
        htmlElements.divTimer.prepend(htmlElements.input);
        
        
        htmlElements.outputTimer.classList.add('hidden');
        htmlElements.input.placeholder = '00:00:00';
        htmlElements.input.type ='text';
        htmlElements.inputButtonAplay.type = 'button';
        htmlElements.inputButtonAplay.value = 'APLAY';
        htmlElements.inputButtonAplay.classList.add('aplayButton');
        }
        
        //Рисует 2 штуки разобраться
        function onClictInOutput(){
        clearInterval(stopwatchInterval);
        ClassHelper.addClass("disabled", htmlElements.buttons);
        createElement();
        }
        
        function onAplayButtonCliced() {
        validateHhMm();
        htmlElements.input.classList.add('hidden');
        htmlElements.inputButtonAplay.classList.add('hidden');
        htmlElements.outputTimer.classList.remove('hidden');
        ClassHelper.removeClass("disabled", htmlElements.buttons);
        let arrayInputElemetn = htmlElements.input.value.split(':');
        totalSecondsDifference = (arrayInputElemetn[0] * (3,6e+6) + arrayInputElemetn[1] * 60000 + arrayInputElemetn[2] * 1000)/1000;
        
        // Можно переиспользовать
        let differenceSeconds = totalSecondsDifference;
        let seconds = parseInt(differenceSeconds % 60);
          let minutes = parseInt((differenceSeconds / 60) % 60);
          let hours = parseInt((differenceSeconds / 3600) % 60);
          if (seconds < 10) {
            seconds = `0${seconds}`;
          }
          if (minutes < 10) {
            minutes = `0${minutes}`;
          }
          if (hours < 10) {
            hours = `0${hours}`;
          }
          htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;
        }
        
        function validateHhMm() {
          const isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9])?$/.test(htmlElements.input.value);
          if (isValid && htmlElements.input.value !== '00:00:00') {
              htmlElements.input.classList.add('borderGreen'); 
              htmlElements.inputButtonAplay.addEventListener('click', onAplayButtonCliced);
          } else {
              htmlElements.input.classList.add('borderRed');
          }
          return isValid;
        }
   }
export { InputClick };
