function Audience57(){}
let audience57 = new Audience57();

function CharAud(ceilingHeight, roomLength, roomWidth, roomNumber){
    this.ceilingHeight = ceilingHeight;
    this.roomLength = roomLength;
    this.roomWidth = roomWidth;
    this.roomNumber = roomNumber;
}

let charAud = new CharAud("2.5m", "5m", "5m", "57")

function AudWindow(fiveChamberProfile, doubleGlazingThickness, sealColor){
    this.fiveChamberProfile = fiveChamberProfile;
    this.doubleGlazingThickness = doubleGlazingThickness;
    this.sealColor = sealColor;
}
let audWindow = new AudWindow("71mm", "40mm", "Gray");

function Door(material, doorHandle){
    this.material = material;
    this.doorHandle = doorHandle;
   /*  openDore:() =>{alert("Open")},
    creak:() => {alert("Krch, Krch, Krch")}, */
}
let door = new Door("wood", "tupai");

function Projector(trademark, model, quality){
    this.trademark = trademark;
    this.model = model;
    this.quality = quality;
    /* warmingUp(){alert('Dash, vsshh')}, */
}
let projector = new Projector("Philips", "PPX 4835", "HD 720p");

function Table(manufacturer, color,type){
    this.manufacturer = manufacturer;
    this.color = color;
    this.type = type;
}

let table = new Table("Ikea","wenge","office");

function Sensei(senName, senLastName, qualification, character){
    this.senName = senName;
    this.senLastName = senLastName;
    this.qualification = qualification;
    this.character = character;
   /*  speak(){alert("speak for life")}, */
}
let sensei = new Sensei("Yury", "Tatsenka", "Full stack web developer", "vigorous");

function Computer(monitor, cropus){
    this.monitor = monitor;
    this.cropus = cropus;
    /* runningWindows(){alert("running windows")}, */
}
let computer = new Computer("17\"", "Tower")

function VideoCard(graphicsProcessor, typeVideoMemory, videoMemoryBus, cooling){
    this.graphicsProcessor = graphicsProcessor;
    this.typeVideoMemory = typeVideoMemory;
    this.videoMemoryBus = videoMemoryBus;
    this.cooling = cooling;
}
let videoCard = new VideoCard("GeForce 9500 GT", "GDDR5", "32bit", "active");
videoCard.upImgScr = function upImgScr(){alert("Crunch, scratch, bzk")};

audience57.charAud = charAud;
audience57.audWindow = audWindow;
audience57.door = door;
audience57.projector = projector;
audience57.table = table;
audience57.sensei = sensei;
computer.videoCard = videoCard;
audience57.computer =computer;

console.log(audience57);