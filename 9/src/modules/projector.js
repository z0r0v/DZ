function Projector(trademark, model, quality){
    /* создаю новое свойство и инициирую его значением, полученным через входной параметр (при помощи this)*/
    this.trademark = trademark;
    this.model = model;
    this.quality = quality;
    /* создаю новое свойство и инициирую его любым значением */
    this.operationTime = 2;
    /* инициализурую переменную функциональным выражением */
    const showTimeOperation = function() {
        let time = this.operationTime;
        return `${time} h`;
    }
    /* на основе функц. выраж.  создаю новый метод*/
    this.showTimeOperation = showTimeOperation;
}

Projector.prototype.showFeatures = function(){
    /* изменяю значение одного из свойств */
    this.operationTime =3;
    const branText = "Device mark";
    const modelText = "model";
    const qualityText =  "quality";
    return `${branText}: ${this.trademark}, ${modelText}: ${this.model}, ${qualityText}: ${this.quality}.`;
}
export {Projector};