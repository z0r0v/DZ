function VideoCard(graphicsProcessor, typeVideoMemory, videoMemoryBus, cooling){
    /* создаю новое свойство и инициирую его значением, полученным через входной параметр (при помощи this)*/    
    this.graphicsProcessor = graphicsProcessor;
    this.typeVideoMemory = typeVideoMemory;
    this.videoMemoryBus = videoMemoryBus;
    this.cooling = cooling;

    /* создаю новое свойство и инициирую его любым значением */
    this.corePerformance = "1750 МГц";
    /* инициализурую переменную функциональным выражением */
    const runApplication = function() {
        return "Metro Exodus Run";
    }
    /* на основе функц. выраж.  создаю новый метод*/
    this.runApplication = runApplication;
}


VideoCard.prototype.showSpecification = function(){
        /* изменяю значение одного из свойств */
        this.corePerformance = "1018 МГц";
        const produced = "Produced by";
        let producedСountry;
        const model = "model";
        const memoryType = "memory type";
        const power = "power";
        const type = "type";
        if(this.graphicsProcessor === "GeForce 9500 GT") {
            producedСountry = "Taiwan";
        }
    return `${produced}: ${producedСountry}, ${model}: ${this.graphicsProcessor}, ${memoryType}: ${this.typeVideoMemory}, ${power}: ${this.videoMemoryBus}, ${type}: ${this.cooling}.`;
}

export {VideoCard};