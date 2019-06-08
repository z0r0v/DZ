function WindowCharacter(fiveChamberProfile, doubleGlazingThickness, sealColor){
    /* создаю новое свойство и инициирую его значением, 
    полученным через входной параметр (при помощи this)*/    
    this.fiveChamberProfile = fiveChamberProfile;
    this.doubleGlazingThickness = doubleGlazingThickness;
    this.sealColor = sealColor;

     /* создаю новое свойство и инициирую его любым значением */
     this.pressureInsideGlasses = 2;
     /* инициализурую переменную функциональным выражением */
     /* область видимости closeWindow ограничена конструктором  WindowCharacter*/
     const closeWindow = function() {
        return "closing";
     }
     /* на основе функц. выраж.  создаю новый метод*/
     this.closeWindow = closeWindow;
    
}
/* Действия производимые с окном */
WindowCharacter.prototype.openWindow = function(handlePosition){
    this.pressureInsideGlasses = 1;
    switch (handlePosition){
        case 'up':
            /* Область видимости up ограничена  switch */
            const up = "ventilation";
            return up;
        case 'horizontally':
             /* Область видимости horizontally ограничена  switch */
            const horizontally = "full opening";
            return horizontally;
        case 'down':
            /* Область видимости down ограничена  switch */
            const down = "closing";
            return down;
        default:
            return "Window closed";
    }
}

export {WindowCharacter};