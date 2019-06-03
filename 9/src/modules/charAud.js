function CharAud(ceilingHeight, roomLength, roomWidth, roomNumber){
     /* создаю новое свойство и инициирую его значением, полученным через входной параметр (при помощи this)*/
    this.ceilingHeight = ceilingHeight;
    this.roomLength = roomLength;
    this.roomWidth = roomWidth;
    this.roomNumber = roomNumber;
    /* создаю новое свойство и инициирую его любым значением */
    this.brokenChairs = 1;

    /* инициализурую переменную функциональным выражением */
    /* Область видимости areaСount ограничена конструктором CharAud*/
    const areaСount = function() {
        return this.roomLength * this.roomWidth;
    }
    /* на основе функц. выраж.  создаю новый метод*/
    this.areaСount = areaСount;
}

CharAud.prototype.changeNameOnDoor = function(nameTeacher) {
    /* Конкатенация фразы в ковычках и имени на табличке */
    /* область видимости great ограничена  методом changeNameOnDoor*/
    const great = "Great teacher";
    this.nameTeacher = `${great} ${nameTeacher}`;
    /* изменяю значение одного из свойств */
    this.brokenChairs = 2;
}

export {CharAud};