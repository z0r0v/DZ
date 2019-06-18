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
      ),
      divTimer: document.querySelector(`.tabs [data-mode = "${mode}"]`
      ),
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
      ),
      divTimer: document.querySelector(`.tabs [data-mode = "${mode}"]`
      ),
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
  }
}

export { StopwatchTimer };
