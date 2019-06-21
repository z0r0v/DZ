const htmlElements = {
    output:document.querySelector('.container [data-mode = "clock"] .output')};

function onClockNextTick() {
    const cirrentTime = new Date();
    const timeStrong = cirrentTime.toTimeString();
    const timeShort = timeStrong.split(' ')[0];
    htmlElements.output.innerText = timeShort;
}

function Clock(){}

Clock.prototype.init = function() {
    setInterval(onClockNextTick, 1000);
    onClockNextTick();
};

export {Clock};