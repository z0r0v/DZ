import { ClassHelper } from "./classHelper.js";

let htmlElements = {};
let startTime;
let stopwatchInterval;
let differenceSeconds;
let totalSecondsDifference = 0;
let differenceMilliseconds;
let runDynamicFunction;
let secondTake;

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

// Динамические элементы
const runDynamicFuncStopWotch = function() {
  differenceSeconds = differenceMilliseconds / 1000 + totalSecondsDifference;
  return differenceSeconds;
};

const runDynamicFuncTimer = function() {
  differenceSeconds = totalSecondsDifference - differenceMilliseconds / 1000;
  return differenceSeconds;
};


const elements = function(mode){
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
    )
  };
  return htmlElements;
}

const addEvents = function(){
  // Может сначала удалить кнопки?
  htmlElements.buttonStart.removeEventListener("click", onStartTimerButtonClict);
  htmlElements.buttonReset.removeEventListener("click", onClickedResetButton);
  htmlElements.buttonStop.removeEventListener("click", onClickedButtonStop);
  
  htmlElements.buttonStart.addEventListener("click", onStartTimerButtonClict);
  htmlElements.buttonReset.addEventListener("click", onClickedResetButton);
  htmlElements.buttonStop.addEventListener("click", onClickedButtonStop);
}

function StopwatchTimer(initMode, initSeconds) {

  let mode = initMode;

  let event; // кнопки твари
 
  secondTake = initSeconds;
  totalSecondsDifference = initSeconds;
 
  switch (mode) {
    case "stopwatch":
        runDynamicFunction = runDynamicFuncStopWotch; 
      mode = initMode;
      // тут появляються елементы
      elements(mode);
      console.log('events', addEvents);
      // ссылка на функцию addEvents в в переменной event
      event = addEvents;
      console.log('event', event);
      // почему результатом функции undefined?
      event();
      console.log('event', event());
       // ссылка на функцию в в переменной dynamicFunc
      break;

    case "timer":
        runDynamicFunction = runDynamicFuncTimer;
        mode = initMode;
        elements(mode);
        event = addEvents;
        event();
      break;
  }
}

export { StopwatchTimer };
