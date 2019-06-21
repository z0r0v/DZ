import { ClassHelper } from "./classHelper.js";

function StopwatchTimer(initMode, initSeconds) {
  let startTime;
  this.stopwatchInterval;
  this.totalSecondsDifference = initSeconds;
  this.differenceMilliseconds;
  let mode = initMode;
  this.differenceSeconds = 0;

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

  this.onStartTimerButtonClict = function(){
    ClassHelper.removeClass("disabled", htmlElements.buttons);
    ClassHelper.addClass("disabled", [htmlElements.buttonStart]);
    this.stopwatchInterval = setInterval(this.runTime, 1000);
    startTime = new Date().getTime();
  }.bind(this);

this.onClickedButtonStop = function(){
  ClassHelper.removeClass("disabled", htmlElements.buttons);
  ClassHelper.addClass("disabled", [htmlElements.buttonStop]);
  clearInterval(this.stopwatchInterval);
  this.totalSecondsDifference = this.differenceSeconds;
}.bind(this);


this.onClickedResetButton = function(){
  ClassHelper.removeClass("disabled", htmlElements.buttons);
  ClassHelper.addClass("disabled", [htmlElements.buttonReset]);
  this.totalSecondsDifference = initSeconds;
  startTime = new Date().getTime();
  clearInterval(this.stopwatchInterval);
  this.runTime();
}.bind(this);


this.runTime = function(){
  this.differenceMilliseconds = new Date().getTime() - startTime;
  this.setSeconds();
  
  let seconds = parseInt(this.differenceSeconds % 60);
    let minutes = parseInt((this.differenceSeconds / 60) % 60);
    let hours = parseInt((this.differenceSeconds / 3600) % 60);
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
}.bind(this);

  htmlElements.buttonStart.addEventListener("click", this.onStartTimerButtonClict);
  htmlElements.buttonReset.addEventListener("click", this.onClickedResetButton);
  htmlElements.buttonStop.addEventListener("click", this.onClickedButtonStop);

}

export { StopwatchTimer };
