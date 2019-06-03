function VideoCard(graphicsProcessor, typeVideoMemory, videoMemoryBus, cooling){
    this.graphicsProcessor = graphicsProcessor;
    this.typeVideoMemory = typeVideoMemory;
    this.videoMemoryBus = videoMemoryBus;
    this.cooling = cooling;
}


VideoCard.prototype.showSpecification = function(){
        const produced = "Produced by";
        let producedСountry;
        const model = "model";
        const memoryType = "memory type";
        const power = "power";
        const type = "type";
        if(this.graphicsProcessor = "GeForce 9500 GT")
            producedСountry = "Taiwan";
    return `${produced}: ${producedСountry}, ${model}: ${this.graphicsProcessor}, ${memoryType}: ${this.typeVideoMemory}, ${power}: ${this.videoMemoryBus}, ${type}: ${this.cooling}.`;
}
export {VideoCard};