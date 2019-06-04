/* инструкция по созданию обьекта audience57*/
function Audience57(timeAir){
    this.time = timeAir;
}
/* Функция проветривания через прототип в обьект */
Audience57.prototype.timeAir = function(time){
    this.time += time;
}
const audience57 = new Audience57(0);/* Создано помещение  задан парметр проветривания 0*/
audience57.timeAir(5);/* Проветрили 5 минут*/
audience57.timeAir(5);/* Проветрили еще раз 5 минут итого оно проветривалось 10минут*/

function CharAud(ceilingHeight, roomLength, roomWidth, roomNumber){
    this.ceilingHeight = ceilingHeight;
    this.roomLength = roomLength;
    this.roomWidth = roomWidth;
    this.roomNumber = roomNumber;
}

CharAud.prototype.cheNameTeacherInNameplate = function(nameTeacher) {
    /* Конкатенация фразы в ковычках и имени на табличке */
    const great = `Great teacher`;
    this.nameTeacher = `${great} ${nameTeacher}`;
}
/* Создание обьекта с характеристиками для аудитории 57 */
const charAud = new CharAud("2.5m", "5m", "5m", "57");
/* Изменение имени на таблички в характеристиках аудитории 57 */
charAud.cheNameTeacherInNameplate("Yriy");/*  */


function WindowCharacter(fiveChamberProfile, doubleGlazingThickness, sealColor){
    this.fiveChamberProfile = fiveChamberProfile;
    this.doubleGlazingThickness = doubleGlazingThickness;
    this.sealColor = sealColor;
}
const windowCharacter = new WindowCharacter("71mm", "40mm", "Gray");
/* Действия производимые с окном */
WindowCharacter.prototype.windowOpening = function(handlePosition){
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
/* Открыли окно на проветривание */
windowCharacter.windowOpening("up");

function Door(material, doorHandle){
    this.material = material;
    this.doorHandle = doorHandle;
}
const door = new Door("wood", "tupai");

Door.prototype.DoorOpening = function(){
    const open = `Makes a sound`;
    const sound = `Krch, Krch, Krch`;
    return `${open}: ${sound}`;
}
/* Открыли двер она издала звук */
door.DoorOpening();


function Projector(trademark, model, quality){
    this.trademark = trademark;
    this.model = model;
    this.quality = quality;
}

Projector.prototype.readMakeModelProjector = function(){
    const branText = "Device mark";
    const modelText = "model";
    const qualityText =  "quality";
    return `${branText}: ${this.trademark}, ${modelText}: ${this.model}, ${qualityText}: ${this.quality}.`;
}

const projector = new Projector("Philips", "PPX 4835", "HD 720p");
/* Читаем свойства проэктора или он сам читает, умный такой проектор))*/
projector.readMakeModelProjector();


function Table(manufacturer, color,type){
    this.manufacturer = manufacturer;
    this.color = color;
    this.type = type;
}
const table = new Table("Ikea","wenge","office");

Table.prototype.pushShelf = function(){
    const shelf = "Push shelf";
    return shelf;
}
/* Выдвигаем полку стола */
table.pushShelf();


function Sensei(senName, senLastName, qualification, character){
    this.senName = senName;
    this.senLastName = senLastName;
    this.qualification = qualification;
    this.character = character;
}
const sensei = new Sensei("Yury", "Tatsenka", "Full stack web developer", "vigorous");

Sensei.prototype.answerStupidQuestions = function(){
    const speak = "Who doesn\'t understand?";
    return speak;
}
/* Сенсей спросил кому че не понятно ?*/
sensei.answerStupidQuestions();


function Computer(monitor, cropus){
    this.monitor = monitor;
    this.cropus = cropus;
}
const computer = new Computer("17\"", "Tower")

Computer.prototype.runningWindows = function(){
   return "Running windows";
}
/* компьютер запустил винду */
computer.runningWindows();


function VideoCard(graphicsProcessor, typeVideoMemory, videoMemoryBus, cooling){
    this.graphicsProcessor = graphicsProcessor;
    this.typeVideoMemory = typeVideoMemory;
    this.videoMemoryBus = videoMemoryBus;
    this.cooling = cooling;
}
const videoCard = new VideoCard("GeForce 9500 GT", "GDDR5", "32bit", "active");

VideoCard.prototype.videoCardSpecificationsOnScreen = function(){
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
videoCard.videoCardSpecificationsOnScreen();

audience57.charAud = charAud;
audience57.windowCharacter = windowCharacter;
audience57.door = door;
audience57.projector = projector;
audience57.table = table;
audience57.sensei = sensei;
computer.videoCard = videoCard;
audience57.computer = computer;
console.log(audience57);