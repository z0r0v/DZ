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
    //upload recursy
    let tic = ()=>{
        setTimeout(tic, 1000);
    }
    setInterval(tic, 1000);
    onClockNextTick();
};

export {Clock};