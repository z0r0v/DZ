function CharAud(ceilingHeight, roomLength, roomWidth, roomNumber){
    this.ceilingHeight = ceilingHeight;
    this.roomLength = roomLength;
    this.roomWidth = roomWidth;
    this.roomNumber = roomNumber;
}

CharAud.prototype.changeNameOnDoor = function(nameTeacher) {
    /* Конкатенация фразы в ковычках и имени на табличке */
    const great = `Great teacher`;
    this.nameTeacher = `${great} ${nameTeacher}`;
}

export {CharAud};