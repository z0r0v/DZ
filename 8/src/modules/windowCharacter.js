function WindowCharacter(fiveChamberProfile, doubleGlazingThickness, sealColor){
    this.fiveChamberProfile = fiveChamberProfile;
    this.doubleGlazingThickness = doubleGlazingThickness;
    this.sealColor = sealColor;
}
/* Действия производимые с окном */
WindowCharacter.prototype.openWindow = function(handlePosition){
    switch (handlePosition){
        case 'up':
            return "ventilation";
            break;
        case 'horizontally':
            return "full opening";
            break;
        case 'down':
            return "closing";
            break;
        default:
            return "Window closed";
    }
}
export {WindowCharacter};