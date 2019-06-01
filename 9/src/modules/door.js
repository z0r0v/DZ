function Door(material, doorHandle){
    /* создаю новое свойство и инициирую его значением, полученным через входной параметр (при помощи this)*/
    this.material = material;
    this.doorHandle = doorHandle;
    /* создаю новое свойство и инициирую его любым значением */
    this.typeHinge = "on top";
    /* инициализурую переменную функциональным выражением */
    const doorClose = function() {
        return  `Krch, Krch, Krch`;
    }
    /* на основе функц. выраж.  создаю новый метод*/
    this.doorClose = doorClose;
}


Door.prototype.openDoor = function(){
    /* изменяю значение одного из свойств */
    this.typeHinge="imbed";
    const open = `Makes a sound`;
    const sound = `Krch, Krch, Krch`;
    return `${open}: ${sound}`;
}

export {Door};