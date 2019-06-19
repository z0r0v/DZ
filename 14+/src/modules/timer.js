import { StopwatchTimer } from "./stopwatchTimer.js";
import { ClassHelper } from "./classHelper.js";




class Timer extends StopwatchTimer {
  constructor() {
    super("timer", 300);
  }
  showInfo() {
    console.log(this);
  }

  
onDubleClictInOutput(){
  this.htmlElements.output.addEventListener('dblclick', onClictInOutput.bind(this));

  function createElement(htmlElements){
  htmlElements.inputButtonAplay = document.createElement('input'),
  htmlElements.input = document.createElement('input'),
  
  htmlElements.inputButtonAplay.addEventListener('click', validateHhMm);
  htmlElements.input.addEventListener('focusout', validateHhMm);
  htmlElements.divTimer.prepend(htmlElements.inputButtonAplay);
  htmlElements.divTimer.prepend(htmlElements.input);
  
  
  htmlElements.output.classList.add('hidden');
  htmlElements.input.placeholder = '00:00:00';
  htmlElements.input.type ='text';
  htmlElements.inputButtonAplay.type = 'button';
  htmlElements.inputButtonAplay.value = 'APLAY';
  htmlElements.inputButtonAplay.classList.add('aplayButton');
  }




  function onClictInOutput(){
    clearInterval(this.stopwatchInterval);
    ClassHelper.addClass("disabled", this.htmlElements.buttons);
    createElement(this.htmlElements);
  }
  
  function onAplayButtonCliced() {
  validateHhMm(htmlElements.input.value).bind(this);
  htmlElements.input.classList.add('hidden');
  htmlElements.inputButtonAplay.classList.add('hidden');
  htmlElements.outputTimer.classList.remove('hidden');
  ClassHelper.removeClass("disabled", htmlElements.buttons);
  let arrayInputElemetn = htmlElements.input.value.split(':');
  
  this.totalSecondsDifference = (arrayInputElemetn[0] * (3,6e+6) + arrayInputElemetn[1] * 60000 + arrayInputElemetn[2] * 1000)/1000;

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
  
  function validateHhMm(value) {
    const isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9])?$/.test(value);
    if (isValid && htmlElements.input.value !== '00:00:00') {
        htmlElements.input.classList.add('borderGreen'); 
        htmlElements.inputButtonAplay.addEventListener('click', onAplayButtonCliced);
    } else {
        htmlElements.input.classList.add('borderRed');
    }
    return isValid;
  }
}
}




export { Timer };

