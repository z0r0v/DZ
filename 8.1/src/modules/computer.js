function Computer(monitor, cropus){
    this.monitor = monitor;
    this.cropus = cropus;
}


Computer.prototype.runSystem = function(){
   return "Running windows";
}
export {Computer};