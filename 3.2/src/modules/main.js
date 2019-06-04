let audience57 = {};

let charAud = {
    ceilingHeight: "2.5m",
    roomLength: "5m",
    roomWidth: "5m",
    roomNumber: "57",
};

let audWindow = {
    fiveChamberProfile: "71mm",
    doubleGlazingThickness: "40mm",
    sealColor: "Gray",
};

let door = {
    material: "wood",
    doorHandle: "tupai",
    openDore:() =>{alert("Open")},
    creak:() => {alert("Krch, Krch, Krch")},
};

let projector = {
    trademark: "Philips",
    model: "PPX 4835",
    quality: "HD 720p",
    warmingUp(){alert('Dash, vsshh')},

};

let table ={
    manufacturer:"Ikea",
    color:"wenge",
    type:"office",
};

let sensei = {
    senName:"Yury",
    senLastName:"Tatsenka",
    qualification:"Full stack web developer",
    character:"vigorous",
    speak(){alert("speak for life")},
};

let computer = {
    monitor:"17\"",
    cropus:"Tower",
    runningWindows(){alert("running windows")},
};

let videoCard ={
    graphicsProcessor:"GeForce 9500 GT",
    typeVideoMemory:"GDDR5",
    videoMemoryBus:"32bit",
    cooling:"active",
};

videoCard.upImgScr = function upImgScr(){alert("Crunch, scratch, bzk")};

audience57.charAud = charAud;
audience57.audWindow = audWindow;
audience57.door = door;
audience57.projector = projector;
audience57.table = table;
audience57.sensei = sensei;
computer.videoCard = videoCard;
audience57.computer =computer;

/*Functional check*/
console.log(audience57);
/*sensei.speak();
videoCard.upImgScr();*/


