/* инструкция по созданию обьекта audience57*/
function Audience57(timeAir){
    this.time = timeAir;
}
/* Функция проветривания через прототип в обьект */
Audience57.prototype.ventilate = function(time){
    this.time += time;
}

export {Audience57};