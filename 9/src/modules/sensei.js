function Sensei(senName, senLastName, qualification, character){
     /* создаю новое свойство и инициирую его значением, полученным через входной параметр (при помощи this)*/
    this.senName = senName;
    this.senLastName = senLastName;
    this.qualification = qualification;
    this.character = character;
    /* создаю новое свойство и инициирую его любым значением */
    this.shirtСolor = "blue";
    /* инициализурую переменную функциональным выражением */
    /* область видимости  cheerUpSensei ограничена конструктором Sensei*/
    const cheerUpSensei = function(scoreOnTheStandings) {
        /* Область видиомтси  cheer ограничена функц выражением cheerUpSensei*/
        let cheer= 6;
        if(scoreOnTheStandings >= 7) {
            /* Область видимости cheer(ограничена if(true)) */
            let cheer = 5;
        cheer++;
    }
    else {
        cheer--;
        }
       return cheer;
    }
    /* на основе функц. выраж.  создаю новый метод*/
    this.cheerUpSensei = cheerUpSensei;
}


Sensei.prototype.anwserQuestions = function(){
    /* изменяю значение одного из свойств */
    this.shirtСolor = "white";
    /* область видимости speak ограничена  методом anwserQuestions*/
    const speak = "Who doesn\'t understand?";
    return speak;
}
export {Sensei};