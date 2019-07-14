const htmlElements = {
  outputClock: document.querySelector(".outputClock")
};

function onClockNextTick() {
  const cirrentTime = new Date();
  const timeStrong = cirrentTime.toTimeString();
  const timeShort = timeStrong.split(" ")[0];
  htmlElements.outputClock.innerText = timeShort;
}

function Clock() {
  console.log(htmlElements.outputClock);
}

Clock.prototype.init = function() {
  setInterval(onClockNextTick, 1000);
  onClockNextTick();
};

export { Clock };
