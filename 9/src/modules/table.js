function Table(manufacturer, color, type){
    /* создаю новое свойство и инициирую его значением, полученным через входной параметр (при помощи this)*/    
    this.manufacturer = manufacturer;
    this.color = color;
    this.type = type;
     /* создаю новое свойство и инициирую его любым значением */
     this.numberShelves = 2;
     /* инициализурую переменную функциональным выражением */
     const closeShelf = function() {
         return "The shelf closes smoothly";
     }
     /* на основе функц. выраж.  создаю новый метод*/
     this.closeShelf = closeShelf;
}


Table.prototype.pushShelf = function(){
    /* изменяю значение одного из свойств */
    this.numberShelves = 1;
    const shelf = "Push shelf";
    return shelf;
}
export {Table};