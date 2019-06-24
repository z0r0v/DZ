import { ClassHelper } from "./classHelper.js";

function StopwatchTimer(initMode, initSeconds) {
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

  this.htmlElements.buttonStart.addEventListener("click", onStartTimerButtonClict);
  this.htmlElements.buttonReset.addEventListener("click", onClickedResetButton);
  this.htmlElements.buttonStop.addEventListener("click", onClickedButtonStop);

  function onStartTimerButtonClict() {
    ClassHelper.removeClass("disabled", htmlElements.buttons);
    ClassHelper.addClass("disabled", [htmlElements.buttonStart]);
    stopwatchInterval = setInterval(runTime.bind(this), 1000);
    //Тут  this указывает на кнопку
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
    // тут this указвыает на window
    differenceSeconds = this.calculateDifferenceSeconds(
      differenceMilliseconds,
      totalSecondsDifference,
      stopwatchInterval
    );

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
}

export { StopwatchTimer };
