function Sensei(senName, senLastName, qualification, character){
    this.senName = senName;
    this.senLastName = senLastName;
    this.qualification = qualification;
    this.character = character;
}


Sensei.prototype.anwserQuestions = function(){
    const speak = "Who doesn\'t understand?";
    return speak;
}
export {Sensei};