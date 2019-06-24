import { ClassHelper } from "./classHelper.js";

function StopwatchTimer(initMode, initSeconds) {
  let startTime;
  let stopwatchInterval;
  let differenceSeconds = 0;
  let totalSecondsDifference = initSeconds;
  let differenceMilliseconds;
  let mode = initMode;
  const self = this;

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

  this.htmlElements = htmlElements;
  

  htmlElements.buttonStart.addEventListener("click", onStartTimerButtonClict);
  htmlElements.buttonReset.addEventListener("click", onClickedResetButton);
  htmlElements.buttonStop.addEventListener("click", onClickedButtonStop);

  function onStartTimerButtonClict() {
    ClassHelper.removeClass("disabled", htmlElements.buttons);
    ClassHelper.addClass("disabled", [htmlElements.buttonStart]);
    stopwatchInterval = setInterval(runTime.bind(self), 1000);
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
    runTime.call(self);
  }

  function runTime() {
    differenceMilliseconds = new Date().getTime() - startTime;
    differenceSeconds = self.calculateDifferenceSeconds(
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
