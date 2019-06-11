import { ClassHelper } from "./classHelper.js";

/* Тут значения */
let startTime;
let stopwatchInterval;
let differenceSeconds;
let totalSecondsDifference;
let differenceMilliseconds;
let htmlElements = {};
/* разобраться */
let dynamicFunc;

let dynamicFuncStopWotch = function(differenceMilliseconds, startTime) {
  differenceMilliseconds = new Date().getTime() - startTime;
  differenceSeconds = differenceMilliseconds / 1000 + totalSecondsDifference;

  htmlElements = {
    output: document.querySelector(
      '.container [data-mode = "stopwatch"] .output'
    ),
    buttonStart: document.querySelector(
      '.container [data-mode = "stopwatch"] .buttons .start'
    ),
    buttonStop: document.querySelector(
      '.container [data-mode = "stopwatch"] .buttons .stop'
    ),
    buttonReset: document.querySelector(
      '.container [data-mode = "stopwatch"] .buttons .reset'
    ),
    buttons: document.querySelectorAll(
      '.container .tabs [data-mode= "stopwatch"] .buttons button'
    )
  };
  event = eventElemtnts;
};

let dynamicFuncTimer = function(differenceMilliseconds, startTime) {
  differenceMilliseconds = new Date().getTime() - startTime;
  differenceSeconds = totalSecondsDifference - differenceMilliseconds / 1000;
  
  htmlElements = {
    output: document.querySelector(
      '.container [data-mode = "timer"] .output'
    ),
    buttonStart: document.querySelector(
      '.container [data-mode = "timer"] .buttons .start'
    ),
    buttonStop: document.querySelector(
      '.container [data-mode = "timer"] .buttons .stop'
    ),
    buttonReset: document.querySelector(
      '.container [data-mode = "timer"] .buttons .reset'
    ),
    buttons: document.querySelectorAll(
      '.container .tabs [data-mode= "timer"] .buttons button'
    )
  };
  
  event = eventElemtnts;
};

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

function onClickedResetButtom() {
  ClassHelper.removeClass("disabled", htmlElements.buttons);
  ClassHelper.addClass("disabled", [htmlElements.buttonReset]);
  /* Тут подиннп значения */
  totalSecondsDifference = 0;
  startTime = new Date().getTime();
  clearInterval(stopwatchInterval);
  runTime();
}

function runTime() {
  /* Тут не ясно */
  differenceSeconds = dynamicFunc;
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
/* у меня не работает клик {Хуйня*/
let eventElemtnts = function() {
    htmlElements.buttonStart.addEventListener("click", onStartTimerButtonClict);
    htmlElements.buttonReset.addEventListener("click", onClickedResetButtom);
    htmlElements.buttonStop.addEventListener("click", onClickedButtonStop);
}
  

function doSomeGenericLogic() {
  /* у меня не работает клик {Хуйня*/
  event = eventElements;
  onStartTimerButtonClict();
  onClickedButtonStop();
  onClickedResetButtom();
}

function StopwatchTimer() {}

/* Разобраться */
StopwatchTimer.prototype.init = function initialize(initMode, initSeconds) {
  switch (initMode) {
    case "stopWotch":
     
      doSomeGenericLogic();
      totalSecondsDifference = initSeconds;
      dynamicFunc = dynamicFuncStopWotch;
      break;

    case "timer":
     
      totalSecondsDifference = initSeconds;
      dynamicFunc = dynamicFuncTimer;
      doSomeGenericLogic();
      break;
  }
};

export { StopwatchTimer };
