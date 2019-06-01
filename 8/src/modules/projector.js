function Projector(trademark, model, quality){
    this.trademark = trademark;
    this.model = model;
    this.quality = quality;
}

Projector.prototype.showFeatures = function(){
    const branText = "Device mark";
    const modelText = "model";
    const qualityText =  "quality";
    return `${branText}: ${this.trademark}, ${modelText}: ${this.model}, ${qualityText}: ${this.quality}.`;
}
export {Projector};