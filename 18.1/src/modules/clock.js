const htmlElement = {
  outputClock:document.querySelector('.outputClock'),
}



function onClockNextTick() {
  const cirrentTime = new Date();
  const timeStrong = cirrentTime.toTimeString();
  const timeShort = timeStrong.split(' ')[0];
  htmlElement.outputClock.innerText = timeShort;
}

function Clock(){
  console.log(htmlElement.outputClock);
}

Clock.prototype.init = function() {
  setInterval(onClockNextTick, 1000);
  onClockNextTick();
};

export {Clock};