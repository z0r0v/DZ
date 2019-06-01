function Door(material, doorHandle){
    this.material = material;
    this.doorHandle = doorHandle;
}


Door.prototype.openDoor = function(){
    const open = `Makes a sound`;
    const sound = `Krch, Krch, Krch`;
    return `${open}: ${sound}`;
}

export {Door};