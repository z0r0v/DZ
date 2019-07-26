import { masterNameCategogy } from "./login.js";
import { master_id } from "./login.js";
import { books, Book } from "./carDatabase.js";
import { Clock } from "./clock.js";
import { AutoInfo } from "./autoinfo.js";

// import { carOwners } from "./carDatabase.js";

let infoCar;
let infoOrder;
const autoInfo = new AutoInfo();

const htmlElements = {
  h2MasterInfo: document.querySelector("div>div>h3"),
  bookTbody: document.querySelector(".table > tbody"),
  buttonBook: document.querySelector(".bookButton"),
  executedOrderTr: document.querySelector(".executedOrder > tr"),
  form: document.querySelector(".bookForm"),
};

const renderBook = () => {
  htmlElements.bookTbody.innerText = "";
  books.getByMasterId(master_id).forEach(function(element, index) {
    creatBoofing(
      ++index,
      element.time,
      element.brand,
      element.phone,
      element.name,
      element.work,
      element.id
    );
  });
};

const creatTable = (idBook) => {
  htmlElements.trBookInfo = document.createElement("tr");
  htmlElements.trBookInfo.id = idBook;
  htmlElements.bookTbody.appendChild(htmlElements.trBookInfo);
  htmlElements.trBookInfo.appendChild(htmlElements.thNumber);
  htmlElements.trBookInfo.appendChild(htmlElements.tdTime);
  htmlElements.trBookInfo.appendChild(htmlElements.tdBrand);
  htmlElements.trBookInfo.appendChild(htmlElements.tdPhone);
  htmlElements.trBookInfo.appendChild(htmlElements.tdName);
  htmlElements.trBookInfo.appendChild(htmlElements.tdWork);
  htmlElements.tdButtons.appendChild(htmlElements.buttonIcoClear);
  htmlElements.tdButtons.appendChild(htmlElements.buttonIcoCheck);
  htmlElements.trBookInfo.appendChild(htmlElements.tdButtons);
};

const creatBoofing = (number, time, brand, phone, name, work, idBook) => {
  htmlElements.thNumber = document.createElement("th");
  htmlElements.thNumber.innerText = number;
  htmlElements.tdTime = document.createElement("td");
  htmlElements.tdTime.innerText = time;
  onANavClicked();
  htmlElements.tdBrand = document.createElement("td");
  htmlElements.tdBrand.innerText = brand;
  htmlElements.tdPhone = document.createElement("td");
  htmlElements.tdPhone.innerText = phone;
  htmlElements.tdName = document.createElement("td");
  htmlElements.tdName.innerText = name;
  htmlElements.tdWork = document.createElement("td");
  htmlElements.tdWork.innerText = work;
  htmlElements.tdWork.addEventListener("dblclick", chengeWork);
  htmlElements.tdButtons = document.createElement("td");
  htmlElements.buttonIcoCheck = document.createElement("i");
  htmlElements.buttonIcoCheck.classList.add(
    "fa",
    "fa-check-circle",
    "fa-lg",
    "text-success"
  );
  htmlElements.buttonIcoClear = document.createElement("i");
  htmlElements.buttonIcoClear.classList.add(
    "fa",
    "fa-times-circle",
    "fa-lg",
    "text-danger"
  );
  htmlElements.buttonIcoClear.addEventListener(
    "click",
    onButtonIcoClearClicked
  );

  htmlElements.buttonIcoCheck.addEventListener("click", addInNewMasive);
  creatTable(idBook);
};

const addInNewMasive = () => {
  const startTime = new Date().getTime();

  htmlElements.executedOrderTr.innerText = null;
  const elements = htmlElements.bookTbody.getElementsByTagName("tr");
  const array = Array.from(elements);
  const index = array.indexOf(event.path[2]);

  const masive = masterBook[index];
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
  masterBook.splice(index, 1);
  renderBook();
};

///перекраска тайма
const onANavClicked = () => {
  const cirrentTime = new Date();
  const timeStrong = cirrentTime.toTimeString();
  const timeShort = timeStrong.split(" ")[0];
  const arrayThisTime = timeShort.split(":");
  const hour = 3600000;
  const minute = 60000;
  let timeThis = arrayThisTime[0] * hour + arrayThisTime[1] * minute;
  const arrayBokeTime = htmlElements.tdTime.innerText.split(":");
  let bookTime = arrayBokeTime[0] * hour + arrayBokeTime[1] * minute;
  let difference = bookTime - timeThis;
  const thirtyMinutes = 1800000;
  const sixtyMinutes = 3600000;

  switch (true) {
    case difference <= 0:
      htmlElements.tdTime.classList.add("text-danger");
      break;
    case difference <= thirtyMinutes:
      htmlElements.tdTime.classList.add("text-warning");
      break;
    case difference <= sixtyMinutes:
      htmlElements.tdTime.classList.add("text-success");
      break;
    default:
      htmlElements.tdTime.classList.add("text-body");
  }
};

// Изменение контена для Work value
const chengeWork = () => {
  const workeCheTd = event.path[0];
  htmlElements.cheInputWorke = document.createElement("input");
  htmlElements.cheInputWorke.classList.add("col-md-12");
  htmlElements.cheButtontWorke = document.createElement("button");
  htmlElements.cheButtontWorke.innerText = "apply";
  htmlElements.cheButtontWorke.classList.add(
    "btn",
    "btn-outline-primary",
    "btn-sm",
    "col-md-12"
  );

  htmlElements.cheButtontWorke.addEventListener("click", aplayChengeWork);
  htmlElements.cheInputWorke.value = workeCheTd.innerText;
  workeCheTd.innerText = "";
  workeCheTd.appendChild(htmlElements.cheInputWorke);
  workeCheTd.appendChild(htmlElements.cheButtontWorke);
  workeCheTd.removeEventListener("dblclick", chengeWork);
};

const aplayChengeWork = () => {
  const elements = htmlElements.bookTbody.getElementsByTagName("tr");
  const array = Array.from(elements);
  const index = array.indexOf(event.path[2]);
  masterBook[index].work = htmlElements.cheInputWorke.value;
  renderBook();
};

const onButtonIcoClearClicked = function() {
  const idElement = this.parentNode.parentNode.id;
  console.log("idElement:", this.parentNode.parentNode.id);
  const index = books.books.indexOf(idElement);
  console.log("index:",index);
  console.log();

  //Правим тута
  // delete books.books[index];
  renderBook();
};

const infoBook = {
  time: document.getElementById("formGroupExampleInputTime"),
  brand: document.getElementById("formGroupExampleInputBrand"),
  phone: document.getElementById("formGroupExampleInputPhone"),
  name: document.getElementById("formGroupExampleInputName"),
  work: document.getElementById("formGroupExampleInputWork"),
  registerSign: document.getElementById("formGroupExampleInputRegisterSign"),
  carMileage: document.getElementById("formGroupExampleInputCarMileage"),
  yearIssue: document.getElementById("formGroupExampleInputYearIssue"),
  priceWorke: document.getElementById("formGroupExampleInputPriceWorke"),
  priceParts: document.getElementById("formGroupExampleInputPriceParts")
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

const onButtonToBookClicked = () => {
  const newBook = new Book;
  newBook.id = books.books.length;
  newBook.master_id = master_id;
  newBook.time = infoBook.time.value;
  newBook.brand = infoBook.brand.value;
  newBook.phone = infoBook.phone.value;
  newBook.name = infoBook.name.value;
  newBook.work = infoBook.work.value;
  newBook.registerSign = infoBook.registerSign.value;
  newBook.carMileage = infoBook.carMileage.value;
  newBook.registerSign = infoBook.yearIssue.value,
  newBook.priceWork = infoBook.priceWorke.value,
  newBook.priceParts = infoBook.priceParts.value
  books.books.push(newBook);
  console.log("newBook",newBook);
  console.log("books.books",books.books);
  sortBook();
  formClear();
  renderBook();
};

htmlElements.buttonBook.addEventListener("click", onButtonToBookClicked);

function BooksTable() {
  htmlElements.h2MasterInfo.innerText = masterNameCategogy;
  Clock.prototype.init();

  renderBook();
  //переодически нужно рендерить renderBook чтобы перекрашивался
  let renderBookInterval = setInterval(renderBook, 180000);
}

export { BooksTable, infoCar, infoOrder };
