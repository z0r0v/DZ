function Computer(monitor, cropus){
    /* создаю новое свойство и инициирую его значением, полученным через входной параметр (при помощи this)*/
    this.monitor = monitor;
    this.cropus = cropus;
    /* создаю новое свойство и инициирую его любым значением */
    this.processor = "Intel® Core™ i5";
    /* инициализурую переменную функциональным выражением */
    /*  область видимости processorWarmUp ограничена конструктором Computer*/
    const  processorWarmUp = function() {
        /* область видимости temperature ограничена функциональным выражением processorWarmUp */
        let temperature = 30;
        temperature + 20;
        return `${temperature}°`
    }
    /* на основе функц. выраж.  создаю новый метод*/
    this.processorWarmUp = processorWarmUp;
}


Computer.prototype.runSystem = function(){
    /* изменяю значение одного из свойств */
    this.processor = "Intel® Core™ i7";
   return "Running windows";
}

export {Computer};