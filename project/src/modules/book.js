import { masterNameCategogy } from "./reexport.js";
import { masterId } from "./reexport.js";
import { books, Book } from "./reexport.js";
import { Clock } from "./reexport.js";
import { AutoInfo } from "./reexport.js";
import { infoBook } from "./reexport.js";
import { apendHelpper } from "./reexport.js";

let infoCar;
let infoOrder;
const autoInfo = new AutoInfo();

const btn = "btn";
const btnPrimary = "btn-outline-primary";
const btnSm = "btn-sm";
const colMd12 = "col-md-12";

const htmlElements = {
  h2MasterInfo: document.querySelector("div>div>h3"),
  bookTbody: document.querySelector(".table > tbody"),
  buttonBook: document.querySelector(".bookButton"),
  executedOrderTr: document.querySelector(".executedOrder > tr"),
  form: document.querySelector(".bookForm"),
};

htmlElements.buttonBook.addEventListener("click", onButtonToBookClicked);

const renderBook = () => {
  htmlElements.bookTbody.innerText = "";
  books.getByMasterId(masterId).forEach(function(element, index) {
    creatBoofing(
      ++index,
      element.time,
      element.brand,
      element.phone,
      element.name,
      element.work,
      element.id,
    );
  });
};


function createBookHelper(array, trBookInfo){
  array.forEach((element, index)=>{
    const objTd = document.createElement("td");
    objTd.innerText = element;
    //повесил изменение только туда кудам не нужно в цикле
    if(index === 4){
      objTd.addEventListener("dblclick", chengeWork);
    };
    trBookInfo.appendChild(objTd);
  });
};

function creatButtons(tdButtons, className, colorClass, callback){
  const button = document.createElement("i");
  tdButtons.appendChild(button);
  button.classList.add("fa", `${className}`,`${colorClass}`, "fa-lg");
  button.addEventListener("click", callback);
  };

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
  const _slfe = this;
  const index = findElement(_slfe);
  const masive = books.books[index];
  const brand = masive.brand;
  const year = masive.yearIssue;
  const mileage = masive.carMileage;
  const owner = masive.name;
  const phone = masive.phone;
  const price = masive.priceWork + masive.priceParts;
  const work = masive.work;
  infoCar = `Brand: ${brand}, ${year} year.\nMileage: ${mileage} km.\nOwner: ${owner}.\nPhone: ${phone}.`;
  
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
  renderBook();

};


const changeTimeCondition = (difference, thirtyMinutes, sixtyMinutes, elementTr) => {
  // тут заменить на обьект
  switch (true) {
    case difference <= 0:
        elementTr.classList.add("text-danger");
      break;
    case difference <= thirtyMinutes:
        elementTr.classList.add("text-warning");
      break;
    case difference <= sixtyMinutes:
        elementTr.classList.add("text-success");
      break;
    default:
        elementTr.classList.add("text-body");
  };
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
  htmlElements.tdTime = htmlElements.bookTbody.getElementsByTagName('tr');
  const arrayTr = Array.from(htmlElements.tdTime);

  arrayTr.forEach((element)=>{
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
  htmlElements.cheInputWorke.classList.add("col-md-12");
  htmlElements.cheButtontWorke = document.createElement("button");
  htmlElements.cheButtontWorke.innerText = "apply";
  htmlElements.cheButtontWorke.classList.add(btn, btnPrimary, btnSm, colMd12);
  htmlElements.cheButtontWorke.addEventListener("click", aplayChengeWork);
  htmlElements.cheInputWorke.value = workeCheTd.innerText;
  workeCheTd.innerText = "";
  apendHelpper(workeCheTd, [htmlElements.cheInputWorke, htmlElements.cheButtontWorke]);
  workeCheTd.removeEventListener("dblclick", chengeWork);
};

const findElement = (_slfe) => {
  const idElement = _slfe.parentNode.parentNode.id;
  const i = books.books.filter(function(a){ return a.id == idElement })[0];
  const index = books.books.indexOf(i);
  return index;
}

const aplayChengeWork = function()  {
  const _slfe = this;
  const index = findElement(_slfe);
  books.books[index].work = htmlElements.cheInputWorke.value;
  renderBook();
};

const onButtonIcoClearClicked = function(){
  const _slfe = this;
  const index = findElement(_slfe);
  delete books.books[index];
  renderBook();
};

function formClear(){
  const f = htmlElements.form.getElementsByTagName("input");
  const arrayInput = Array.from(f);
  arrayInput.forEach(element => {
    element.value = "";
    htmlElements.buttonBook.value = "Book";
  });
};

function sortBook(){
  books.books.sort(function(a, b) {
    if (a.time > b.time) {
      return 1;
    }
    if (a.time < b.time) {
      return -1;
    }
    return 0;
  });
};

//Тут нужно класс
function onButtonToBookClicked() {
  const newBook = new Book;
  newBook.id = books.books.length;
  newBook.masterId = masterId;
  newBook.time = infoBook.time.value;
  newBook.brand = infoBook.brand.value;
  newBook.phone = infoBook.phone.value;
  newBook.name = infoBook.name.value;
  newBook.work = infoBook.work.value;
  newBook.registerSign = infoBook.registerSign.value;
  newBook.carMileage = infoBook.carMileage.value;
  newBook.yearIssue = infoBook.yearIssue.value,
  newBook.priceWork = infoBook.priceWorke.value,
  newBook.priceParts = infoBook.priceParts.value
  books.books.push(newBook);
  sortBook();
  formClear();
  renderBook();
};

function BooksTable() {
  htmlElements.h2MasterInfo.innerText = masterNameCategogy;
  Clock.prototype.init();
  renderBook();
  //переодически нужно рендерить renderBook чтобы перекрашивался
  setInterval(renderBook, 180000);
}

export { BooksTable, infoCar, infoOrder };
