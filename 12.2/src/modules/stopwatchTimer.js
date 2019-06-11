import { ClassHelper } from "./classHelper.js";

let htmlElements = {};

/* Тут значения */
let startTime;
let stopwatchInterval;

let differenceSeconds;
let totalSecondsDifference = 0;

let differenceMilliseconds;


let dynamicFunc = function(totalSecondsDifference, startTime){};


let dynamicFuncStopWotch = function(totalSecondsDifference, startTime) {
  differenceMilliseconds = new Date().getTime() - startTime;
  differenceSeconds = differenceMilliseconds / 1000 + totalSecondsDifference;
  return differenceSeconds;
};
console.log(dynamicFuncStopWotch);

let dynamicFuncTimer = function(totalSecondsDifference, startTime) {
  differenceMilliseconds = new Date().getTime() - startTime;
  differenceSeconds = totalSecondsDifference - differenceMilliseconds / 1000; 
  return differenceSeconds;
};
console.log(dynamicFuncTimer);




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
  // Тут нужно поменять значение 
  totalSecondsDifference = 0;
  startTime = new Date().getTime();
  clearInterval(stopwatchInterval);
  runTime();
}


function runTime() {
    // Суда сгенерить функцию расчета
    dynamicFunc();
    
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


function StopwatchTimer(initMode, initSeconds) {

  let mode = initMode;

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

    htmlElements.buttonStart.addEventListener("click", onStartTimerButtonClict);
    htmlElements.buttonReset.addEventListener("click", onClickedResetButton);
    htmlElements.buttonStop.addEventListener("click", onClickedButtonStop);

  switch (mode) {
    case "stopwatch":
    // Вот тут какаято херня
      totalSecondsDifference = initSeconds;
      dynamicFunc = dynamicFuncStopWotch(initSeconds, startTime);
      break;

    case "timer":
      totalSecondsDifference = initSeconds;
      dynamicFunc = dynamicFuncTimer(initSeconds, startTime);
      break;
  }

}

export { StopwatchTimer };
