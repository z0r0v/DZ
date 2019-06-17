import { ClassHelper } from "./classHelper.js";

class StopwatchTimer {
  constructor(initMode, initSeconds) {
    let startTime;
    let stopwatchInterval;
    let differenceSeconds = 0;
    let totalSecondsDifference = initSeconds;
    let differenceMilliseconds;
    let mode = initMode;

    this.htmlElements = {
      output: document.querySelector(
        `.container [data-mode = "${mode}"] .output`
      ),
      buttonStart: document.querySelector(
        `.container [data-mode = "${mode}"] .buttons .start`
      ),
      buttonStop: document.querySelector(
        `.container [data-mode = "${mode}"] .buttons .stop`
      ),
      buttonReset: document.querySelector(
        `.container [data-mode = ${mode}] .buttons .reset`
      ),
      buttons: document.querySelectorAll(
        `.container .tabs [data-mode= "${mode}"] .buttons button`
      )
    };

    const htmlElements = {
      output: document.querySelector(
        `.container [data-mode = "${mode}"] .output`
      ),
      buttonStart: document.querySelector(
        `.container [data-mode = "${mode}"] .buttons .start`
      ),
      buttonStop: document.querySelector(
        `.container [data-mode = "${mode}"] .buttons .stop`
      ),
      buttonReset: document.querySelector(
        `.container [data-mode = ${mode}] .buttons .reset`
      ),
      buttons: document.querySelectorAll(
        `.container .tabs [data-mode= "${mode}"] .buttons button`
      )
    };

    htmlElements.buttonStart.addEventListener("click", onStartTimerButtonClict);
    htmlElements.buttonReset.addEventListener("click", onClickedResetButton);
    htmlElements.buttonStop.addEventListener("click", onClickedButtonStop);

    function onStartTimerButtonClict() {
      ClassHelper.removeClass("disabled", htmlElements.buttons);
      ClassHelper.addClass("disabled", [htmlElements.buttonStart]);
      stopwatchInterval = setInterval(runTime, 1000);
      startTime = new Date().getTime();
    }

    function onClickedButtonStop() {
      ClassHelper.removeClass("disabled", htmlElements.buttons);
      ClassHelper.addClass("disabled", [htmlElements.buttonStop]);
      clearInterval(stopwatchInterval);
      totalSecondsDifference = differenceSeconds;
    }

    function onClickedResetButton() {
      ClassHelper.removeClass("disabled", htmlElements.buttons);
      ClassHelper.addClass("disabled", [htmlElements.buttonReset]);
      totalSecondsDifference = initSeconds;
      startTime = new Date().getTime();
      clearInterval(stopwatchInterval);
      runTime();
    }

    function runTime() {
      differenceMilliseconds = new Date().getTime() - startTime;
      switch (mode) {
        case "stopwatch":
          differenceSeconds =
            Math.round(differenceMilliseconds / 1000) + totalSecondsDifference;
          break;
        case "timer":
          differenceSeconds =
            totalSecondsDifference - Math.round(differenceMilliseconds / 1000);
          if (differenceSeconds === 0) {
            clearInterval(stopwatchInterval);
            htmlElements.buttonStop.classList.add("disabled");
          }
          break;
        default:
          //Если catch блоков среди вызванных функций нет, выполнение программы будет остановлено.
          throw new Error("is mode don't come");
      }

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

/* 14+ */
    htmlElements.outputTimer = document.querySelector('.container [data-mode = "timer"] .output');
    htmlElements.outputTimer.addEventListener('dblclick', onClictInOutput);
    htmlElements.input = document.createElement('input'),
    
    htmlElements.inputButtonAplay = document.createElement('input'),
    htmlElements.input.addEventListener('focusout', validateHhMm);
    htmlElements.input.placeholder = '00:00:00';
    htmlElements.input.type ='text';

    htmlElements.inputButtonAplay.type = 'button';
    htmlElements.inputButtonAplay.value = 'APLAY';
    htmlElements.inputButtonAplay.classList.add('aplayButton');
    htmlElements.inputButtonAplay.addEventListener('click', validateHhMm);


  //Рисует 2 штуки разобраться

  function onClictInOutput(){
    clearInterval(stopwatchInterval);
    ClassHelper.addClass("disabled", htmlElements.buttons);
    htmlElements.divTimer = document.querySelector('.tabs [data-mode = "timer"]'),
    htmlElements.divTimer.prepend(htmlElements.inputButtonAplay);
    htmlElements.divTimer.prepend(htmlElements.input);
    htmlElements.outputTimer.classList.add('hidden');
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
}

export { StopwatchTimer };
