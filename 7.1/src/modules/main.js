const startClockInterval = setInterval(onIntervalNextTick, 1000);
const startTimeInterval = setTimeout(timerStartButton, 1000);
clearInterval(startTimeInterval);

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');


htmlElements.clock.addEventListener('click', function() {
    switchToMode(this.dataset.mode)
});

htmlElements.stopwatch.addEventListener('click', function() {
    switchToMode(this.dataset.mode)
});

htmlElements.timer.addEventListener('click', function() {
    switchToMode(this.dataset.mode)/* доступ к елементу отрибута */
});

htmlElements.startBtn.addEventListener('click', timerStartButton);

htmlElements.stopBtn.addEventListener('click', function(){
    clearInterval(startTimeInterval);
});





function removeHiddenButton(){
    htmlElements.startBtn.classList.remove('hidden');
    htmlElements.stopBtn.classList.remove('hidden');
    htmlElements.resetBtn.classList.remove('hidden');
  }

  function addHiddenButton(){
    htmlElements.startBtn.classList.add('hidden');
    htmlElements.stopBtn.classList.add('hidden');
    htmlElements.resetBtn.classList.add('hidden');
  }

/* Часы */
function onIntervalNextTick(){
    const timeIn = new Date();
    /* так типо наверн правильней наверн и руки не оторвут ) */
    const hour = timeIn.getHours();
    let minutes = timeIn.getMinutes();
    let seconds = timeIn.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    function checkTime(i){
        if (i<10){i="0" + i;
    }
    return i;
    }
    const timeOut = `${hour}:${minutes}:${seconds}`;
    /* так конечно короче*/
    /* const timeStrung = timeIn.toTimeString(); *//* Date in string */
    /* const timeOut = timeStrung.split(' ')[0]; *//* dait in array, 00:00:00 - this 0=[0] element new array*/
    htmlElements.output.innerText = timeOut; 
}




function timerStartButton(){
    const startTime = new Date().getTime();
    function timerGo(){
        let difference = (new Date().getTime() - startTime) / 1000;
        let seconds = parseInt(difference % 60);
        let minutes = parseInt((difference / 60) % 60);
        let hours = parseInt(((difference / 60) % 60)/60 % 60);
        if(seconds < 10){seconds = '0' + seconds;}
        if(minutes < 10){minutes = '0' + minutes;}
        if(hours < 10){hours = '0' + hours;}
        htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;
        setTimeout(timerGo, 1000);
    } 
    timerGo();
}


function addSelected(valueTabs){
    remooveSelected(htmlElements.clock);
    remooveSelected(htmlElements.timer);
    remooveSelected(htmlElements.stopwatch);
    valueTabs.classList.add('selected');
}

function remooveSelected(valueTabs){
    valueTabs.classList.remove('selected');
}


function switchToMode(mode) {
    switch (mode) {
      case 'clock':
            addSelected(htmlElements.clock);
            addHiddenButton();
            clearTimeout(startTimeInterval);
        break;
      case 'stopwatch':
            addSelected(htmlElements.stopwatch);
            removeHiddenButton();
            htmlElements.output.innerText = '00:00:00';
            clearTimeout(startClockInterval);
        break;
      case 'timer':
            addSelected(htmlElements.timer);
        break;
    }
  }

