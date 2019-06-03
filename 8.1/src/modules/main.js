import {Audience57} from "./audience57.js";
import {CharAud} from "./charAud.js";
import {WindowCharacter} from "./windowCharacter.js";
import {Door} from "./door.js";
import {Projector} from "./projector.js";
import {Table} from "./table.js";
import {Sensei} from "./sensei.js";
import {Computer} from "./computer.js";
import {VideoCard} from "./videoCard.js";

const audience57 = new Audience57(0);/* Создано помещение  задан парметр проветривания 0*/
audience57.ventilate(5);/* Проветрили 5 минут*/
audience57.ventilate(5);/* Проветрили еще раз 5 минут итого оно проветривалось 10минут*/


/* Создание обьекта с характеристиками для аудитории 57 */
const charAud = new CharAud("2.5m", "5m", "5m", "57");
/* Изменение имени на таблички в характеристиках аудитории 57 */
charAud.changeNameOnDoor("Yriy");/*  */

/* создали окно */
const windowCharacter = new WindowCharacter("71mm", "40mm", "Gray");
/* Открыли окно на проветривание */
windowCharacter.openWindow("up");


const door = new Door("wood", "tupai");
/* Открыли двер она издала звук */
door.openDoor();


const projector = new Projector("Philips", "PPX 4835", "HD 720p");
/* Читаем свойства проэктора или он сам читает, умный такой проектор))*/
projector.showFeatures();


const table = new Table("Ikea","wenge","office");
/* Выдвигаем полку стола */
table.pushShelf();


const sensei = new Sensei("Yury", "Tatsenka", "Full stack web developer", "vigorous");
/* Сенсей спросил кому че не понятно ?*/
sensei.anwserQuestions();


const computer = new Computer("17\"", "Tower");
/* компьютер запустил винду */
computer.runSystem();


const videoCard = new VideoCard("GeForce 9500 GT", "GDDR5", "32bit", "active");
videoCard.showSpecification();


audience57.charAud = charAud;
audience57.windowCharacter = windowCharacter;
audience57.door = door;
audience57.projector = projector;
audience57.table = table;
audience57.sensei = sensei;
computer.videoCard = videoCard;
audience57.computer = computer;

console.log(audience57);
