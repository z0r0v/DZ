import { ClassHelper } from "./classHelper.js";

let htmlElements = {};
let startTime;
let stopwatchInterval;
let differenceSeconds;
let totalSecondsDifference = 0;
let differenceMilliseconds;
let runDynamicFunction;
let secondTake;

/* 12+ */
let userValue = null;
let isStarted = false;

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
  // Принимает переданное значение secondTake
  totalSecondsDifference = secondTake;
  startTime = new Date().getTime();
  clearInterval(stopwatchInterval);
  runTime();
}

function runTime() {
  differenceMilliseconds = new Date().getTime() - startTime;
  // Передаю значение по ссылке
  differenceSeconds = runDynamicFunction();
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

const runDynamicFuncStopWotch = function() {
  differenceSeconds = differenceMilliseconds / 1000 + totalSecondsDifference;
  return differenceSeconds;
};

const runDynamicFuncTimer = function() {
  differenceSeconds = totalSecondsDifference - differenceMilliseconds / 1000;
  return differenceSeconds;
};

function StopwatchTimer(initMode, initSeconds) {
  let mode = initMode;
  secondTake = initSeconds;

  htmlElements = {
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
    ),
        /* 12+ */
    divе: document.querySelector('.tabs [data-mode = "timer"]'),
    input: document.createElement('input'),
    inputButtonAplay: document.createElement('input'),
  };

  htmlElements.buttonStart.addEventListener("click", onStartTimerButtonClict);
  htmlElements.buttonReset.addEventListener("click", onClickedResetButton);
  htmlElements.buttonStop.addEventListener("click", onClickedButtonStop);
 /* 12+ */
    htmlElements.output.addEventListener('dblclick', resrtsHidden);
    htmlElements.input.addEventListener('focusout', validateHhMm);

  totalSecondsDifference = initSeconds;

  switch (mode) {
    case "stopwatch":
      // ссылка на функцию в в переменной dynamicFunc
      runDynamicFunction = runDynamicFuncStopWotch;
      break;

    case "timer":
      runDynamicFunction = runDynamicFuncTimer;
      break;
  }
}




/* 12+ */
function addPropertiesElements(){
  htmlElements.input.placeholder = '00:00:00';
  htmlElements.input.type ='text';
  htmlElements.input.classList.add('hidden');
  
  htmlElements.inputButtonAplay.type = 'button';
  htmlElements.inputButtonAplay.value = 'APLAY';
  htmlElements.inputButtonAplay.classList.add('aplayButton');
  htmlElements.inputButtonAplay.classList.add('hidden');
}


function resrtsHidden() {
  htmlElements.input.classList.remove('hidden');
  htmlElements.inputButtonAplay.classList.remove('hidden');
  htmlElements.input.value = '';
  htmlElements.input.classList.remove('borderRed', 'borderGreen');
  htmlElements.output.classList.add('hidden');
 
}

function attachElements(){
  htmlElements.divTimer.prepend(htmlElements.inputButtonAplay);
  htmlElements.divTimer.prepend(htmlElements.input);
}


/* От суда новое значение */
function onAplayButtonCliced() {
  addPropertiesElements();
  attachElements();
  htmlElements.input.classList.add('hidden');
  htmlElements.inputButtonAplay.classList.add('hidden');
  htmlElements.output.classList.remove('hidden');
  let arrayInputElemetn = htmlElements.input.value.split(':');
  let difference = arrayInputElemetn[0] * 60*60*1000 + arrayInputElemetn[1] * 60000 + arrayInputElemetn[2] * 1000;
  userValue = difference;
}

/* Отсуда забрать */
export function checkTimeValue(){
  if (!isStarted) startTime = new Date().getTime();
      let current = new Date().getTime();
  if(userValue === null) {
      
      difference =  5*60*1000 + startTime - current;
  }
  else{
      difference = userValue + startTime - current;
      
  }
  if (difference <= 0) {
      clearInterval(startInterval);
      isStarted = false;
      
  }
  return difference;
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



export { StopwatchTimer };
