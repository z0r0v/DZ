function Projector(trademark, model, quality){
    /* создаю новое свойство и инициирую его значением, полученным через входной параметр (при помощи this)*/
    this.trademark = trademark;
    this.model = model;
    this.quality = quality;
    /* создаю новое свойство и инициирую его любым значением */
    this.operationTime = 1;

    /* инициализурую переменную функциональным выражением */
    /* область видимости showTimeOperation ограничена конструктором Projector */
    const showTimeOperation = function() {
        /* область видимости time ограничена функц. выраж. showTimeOperation */
        let time = this.operationTime;
        return `${time} h`;
    }
    /* на основе функц. выраж.  создаю новый метод*/
    this.showTimeOperation = showTimeOperation;
}

Projector.prototype.showFeatures = function(){
    /*  создается хотя бы одна переменная или константа в цикле*/
   
    for(let i = 0; i<5; i++){
         /* i область видимости i ограничевается циклом for */
        this.operationTime = i;
    }
    /* изменяю значение одного из свойств */
    this.operationTime =5;
    /* Область видимости переменных branText, modelText, qualityText ограничена методом showFeatures */
    const branText = "Device mark";
    const modelText = "model";
    const qualityText =  "quality";
    return `${branText}: ${this.trademark}, ${modelText}: ${this.model}, ${qualityText}: ${this.quality}.`;
}
export {Projector};