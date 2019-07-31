import { masterNameCategogy } from "./reexport.js";
import { masterId } from "./reexport.js";
import { books, Book } from "./reexport.js";
import { Clock } from "./reexport.js";
import { AutoInfo } from "./reexport.js";
import { infoBook } from "./reexport.js";
import { apendHelpper } from "./reexport.js";
import { SwitchCase2 } from "./reexport.js";
import { ValidationForm } from "./reexport.js";

let infoCar;
let infoOrder;
const autoInfo = new AutoInfo();

const btn = "btn";
const btnPrimary = "btn-outline-primary";
const btnSm = "btn-sm";
const colMd12 = "col-md-12";
const danger = "border-danger";

const htmlElements = {
  h2MasterInfo: document.querySelector("div>div>h3"),
  bookTbody: document.querySelector(".table > tbody"),
  buttonBook: document.querySelector(".bookButton"),
  executedOrderTr: document.querySelector(".executedOrder > tr"),
  form: document.querySelector(".bookForm")
};

htmlElements.buttonBook.addEventListener("click", onButtonToBookClicked);




function createBookHelper(array, trBookInfo) {
  array.forEach((element, index) => {
    const objTd = document.createElement("td");
    objTd.innerText = element;
    //повесил изменение только туда кудам не нужно в цикле
    if (index === 4) {
      objTd.addEventListener("dblclick", chengeWork);
    }
    trBookInfo.appendChild(objTd);
  });
}

function creatButtons(tdButtons, className, colorClass, callback) {
  const button = document.createElement("i");
  tdButtons.appendChild(button);
  button.classList.add("fa", `${className}`, `${colorClass}`, "fa-lg");
  button.addEventListener("click", callback);
}

const creatElementsBook = (element, arayElement, idBook, number) => {
  const trBookInfo = document.createElement("tr");
  trBookInfo.id = idBook;
  element.appendChild(trBookInfo);

  const thNumber = document.createElement("th");
  thNumber.innerText = number;
  trBookInfo.appendChild(thNumber);
  createBookHelper(arayElement, trBookInfo);

  const checkCircle = "fa-check-circle";
  const timesCircle = "fa-times-circle";
  const success = "text-success";
  const danger = "text-danger";

  const tdButtons = document.createElement("td");
  trBookInfo.appendChild(tdButtons);

  creatButtons(tdButtons, checkCircle, success, addInNewMasive);
  creatButtons(tdButtons, timesCircle, danger, onButtonIcoClearClicked);
};

const creatBoofing = (number, time, brand, phone, name, work, idBook) => {
  const arayElement = [time, brand, phone, name, work];
  creatElementsBook(htmlElements.bookTbody, arayElement, idBook, number);
  onANavClicked();
};

function addInNewMasive() {
  ////Кнопка check in v!!!!!!!!!!
  const startTime = Date.now();
  htmlElements.executedOrderTr.innerText = null;
  const thisContext = this;
  const index = findElement(thisContext);

  const array = books.books[index];
  //деструктуризация
  const { brand, yearIssue, carMileage, name, phone, work } = array;
  const price = array.priceWork + array.priceParts;

  infoCar = `Brand: ${brand}, ${yearIssue} year.\nMileage: ${carMileage} km.\nOwner: ${name}.\nPhone: ${phone}.`;

  infoOrder = {
    work: work,
    price: price
  };

  autoInfo.creatTableOrder(startTime);
  //теерь нужно добавить в масив наши данные из масива который и потом удалить

  // carOwners.car.push(masive);
  // carOwners.push(masive);
  //   console.log(carOwners);
  books.books.splice(index, 1);
  new RenderBook().strBook(htmlElements.bookTbody, books, masterId);
};

const changeTimeCondition = (
  difference,
  thirtyMinutes,
  sixtyMinutes,
  elementTr
) => {
  new SwitchCase2(true, difference, thirtyMinutes, sixtyMinutes, elementTr);
};

//перекраска тайма
const onANavClicked = () => {
  const cirrentTime = new Date();
  const timeStrong = cirrentTime.toTimeString();
  const timeShort = timeStrong.split(" ")[0];
  const arrayThisTime = timeShort.split(":");
  const hour = 3600000;
  const minute = 60000;
  let timeThis = arrayThisTime[0] * hour + arrayThisTime[1] * minute;
  htmlElements.tdTime = htmlElements.bookTbody.getElementsByTagName("tr");
  const arrayTr = Array.from(htmlElements.tdTime);

  arrayTr.forEach(element => {
    const elementTr = element.childNodes[1];
    let elementTrSplit = elementTr.innerText.split(":");
    let bookTime = elementTrSplit[0] * hour + elementTrSplit[1] * minute;
    let difference = bookTime - timeThis;
    const thirtyMinutes = 1800000;
    const sixtyMinutes = 3600000;
    changeTimeCondition(difference, thirtyMinutes, sixtyMinutes, elementTr);
  });
};

// Изменение контена для Work value
const chengeWork = () => {
  const workeCheTd = event.path[0];
  htmlElements.cheInputWorke = document.createElement("input");
  htmlElements.cheInputWorke.classList.add(colMd12);
  htmlElements.cheButtontWorke = document.createElement("button");
  htmlElements.cheButtontWorke.innerText = "apply";
  htmlElements.cheButtontWorke.classList.add(btn, btnPrimary, btnSm, colMd12);
  htmlElements.cheButtontWorke.addEventListener("click", aplayChengeWork);
  htmlElements.cheInputWorke.value = workeCheTd.innerText;
  workeCheTd.innerText = "";
  apendHelpper(workeCheTd, [
    htmlElements.cheInputWorke,
    htmlElements.cheButtontWorke
  ]);
  workeCheTd.removeEventListener("dblclick", chengeWork);
};

const findElement = thisContext => {
  const idElement = thisContext.parentNode.parentNode.id;
  const neadArrayElement = books.books.filter(function(a) {
    return a.id == idElement;
  })[0];
  const index = books.books.indexOf(neadArrayElement);
  return index;
};

class chooseСontent {
  constructor(thisContext, callback) {
    const index = findElement(thisContext);
    callback(index);
    new RenderBook().strBook(htmlElements.bookTbody, books, masterId);
  };
};

const aplayChengeWork = function() {
  const thisContext = this;
  new chooseСontent(thisContext, index => {
    books.books[index].work = htmlElements.cheInputWorke.value;
  });
};

const onButtonIcoClearClicked = function() {
  const thisContext = this;
  new chooseСontent(thisContext, index => {
    delete books.books[index];
  });
};

function formClear() {
  const inputColection = htmlElements.form.getElementsByTagName("input");
  const arrayInput = Array.from(inputColection);
  arrayInput.forEach(element => {
    element.value = "";
    htmlElements.buttonBook.value = "Book";
  });
}

function sortBook() {
  books.books.sort(function(a, b) {
    if (a.time > b.time) {
      return 1;
    }
    if (a.time < b.time) {
      return -1;
    }
    return 0;
  });
}

//не воркает по лехиному методу
// function sortBook(){
//   books.books.sort((a, b) => b.time - a.time);
// };

function onButtonToBookClicked() {
  //Добавление элементов в очередь

  const newBook = new Book();
  newBook.id = books.books.length;
  newBook.masterId = masterId;

  //нужен класс
  newBook.time = infoBook.time.value;
  newBook.brand = infoBook.brand.value;
  newBook.phone = infoBook.phone.value;
  newBook.name = infoBook.name.value;
  newBook.work = infoBook.work.value;
  newBook.registerSign = infoBook.registerSign.value;
  newBook.carMileage = infoBook.carMileage.value;
  (newBook.yearIssue = infoBook.yearIssue.value),
    (newBook.priceWork = infoBook.priceWorke.value),
    (newBook.priceParts = infoBook.priceParts.value);

  const array = [
    infoBook.time,
    infoBook.brand,
    infoBook.phone,
    infoBook.name,
    infoBook.work,
    infoBook.registerSign,
    infoBook.carMileage,
    infoBook.yearIssue,
    infoBook.priceWorke,
    infoBook.priceParts
  ];

  new ValidationForm(array, danger, () => {
    formClear();
    books.books.push(newBook);
    sortBook();
    new RenderBook().strBook(htmlElements.bookTbody, books, masterId);
  });
};


class RenderBook{
  constructor(){};
  strBook(element, array, masterId){
  element.innerText = null;
    array.getByMasterId(masterId).forEach((element, index)=>{
      creatBoofing(  
        ++index,
        element.time,
        element.brand,
        element.phone,
        element.name,
        element.work,
        element.id);
    });
};
};


function BooksTable() {
  htmlElements.h2MasterInfo.innerText = masterNameCategogy;
  Clock.prototype.init();
  new RenderBook().strBook(htmlElements.bookTbody, books, masterId);
  //переодически нужно рендерить renderBook чтобы перекрашивался
  const threeMinutes = 180000;
  setInterval(()=>{
    new RenderBook().strBook(htmlElements.bookTbody, books, masterId);
  }, threeMinutes);
};

export { BooksTable, infoCar, infoOrder, RenderBook };
