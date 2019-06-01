/* инструкция по созданию обьекта audience57*/
function Audience57(timeAir){
    /* создаю новое свойство и инициирую его значением, полученным через входной параметр (при помощи this)*/
    this.time = timeAir;
     /* создаю новое свойство и инициирую его любым значением */
    this.lux = 400;
    this.illumination = `${this.lux}lx`;
    /* инициализурую переменную функциональным выражением */
    const checkAvailablePlaces = function(chairs, people) {
        return chairs - people;
    }
    /* на основе функц. выраж.  создаю новый метод*/
    this.checkAvailablePlaces = checkAvailablePlaces;
}

/* Функция проветривания через прототип в обьект */
Audience57.prototype.ventilate = function(time){
    this.time += time;
    /* изменяю значение одного из свойств */
    this.lux = 300;
    
}

export {Audience57};