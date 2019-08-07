import { UserServiceFetch } from "./reexport.js";
import { AutoInfoGetOder } from "./reexport.js";
import { books, Book } from "./reexport.js";
import { Clock } from "./reexport.js";
import { infoBook } from "./reexport.js";
import { apendHelpper } from "./reexport.js";
import { SwitchCase2 } from "./reexport.js";
import { ValidationForm } from "./reexport.js";
import { masterId } from "./reexport.js";
import { masters } from "./reexport.js";

import { carsOwners, ReplacementParts } from "./reexport.js";
import { GetTodayDate } from "./reexport.js";

let infoCar;
let infoOrder;
const btn = "btn";
const btnPrimary = "btn-outline-primary";
const btnSm = "btn-sm";
const colMd12 = "col-md-12";
const danger = "border-danger";

const htmlElements = {
  h2MasterInfo: document.querySelector("summary"),
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

  console.log(array);

  //деструктуризация
  const { brand, yearIssue, carMileage, name, phone, work, registerSign } = array;
  const price = array.priceWork + array.priceParts;

  infoCar = `Brand: ${brand}, ${yearIssue} year.\nMileage: ${carMileage} km.\nOwner: ${name}.\nPhone: ${phone}.`;

  infoOrder = {
    work: work,
    price: price
  };

  new AutoInfoGetOder().creatTableOrder(startTime);

  console.log(carsOwners.carsOwners);

  class FindOrAddToServer {
    constructor() {

      // Можно вынести в другой модуль но чуча будет головняка, а сроки ГОРЯТ АГНЕМ СИНИМ !!!!!!!! 

      ///Дофига параметров придеться принять или через this

      const owner = carsOwners.carsOwners.filter(function(a) {
        return a.phone == phone;
      })[0];
      

      if (owner === undefined) {
        const newIdForJsone = carsOwners.carsOwners[carsOwners.carsOwners.length - 1].id + 1;
        const url = "https://my-server-dz25.herokuapp.com/carsOwners";
        new UserServiceFetch().add(
          url,
          {
            id: newIdForJsone,
            name: name,
            phone: phone,
            car: [
              {
                id:newIdForJsone,
                brand:array.brand,
                carMileage:array.carMileage,
                registerSign: array.registerSign,
                replacementParts:[],
                futureWorkPlan:[],
              }
            ]
          }
        );
      } else {
        const cars = owner.car;
        const car = cars.filter(function(a) {
          return a.brand == brand;
        })[0];

        if (cars === undefined) {
          console.log("Добавить тачку и запустить сначала ");

          //Нужна функция которая добавит тачку переисвользовать !!!!!
          //Переипользовать функцию которая дабавляет работы!!
        } else {
          //Переипользовать функцию которая дабавляет работы!!

          //записать это на сервак !!!!! ФУнкция котора добавляет работы!!
          car.carMileage = array.carMileage;
          const data = GetTodayDate();
          const master = masters.getById(masterId).lastName;
          const newReplacement = new ReplacementParts();
          newReplacement.masterName = master;
          newReplacement.data = data;
          newReplacement.replacementMileage = carMileage;
          newReplacement.work = work;
          car.replacementParts.push(newReplacement);
        }

        //Метод который будет добавлять данные о следующей замене!!!!!
      };
    };
  };

  //Обьект который будет ищет по масиву на серваке и записывает!

  new FindOrAddToServer();
  books.books.splice(index, 1);
  new RenderBook().strBook(htmlElements.bookTbody, books, masterId);
}

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
  }
}

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

function onButtonToBookClicked() {
  //Добавление элементов в очередь
  const newBook = new Book();
  newBook.id = books.books.length;
  newBook.masterId = masterId;

  newBook.time = infoBook.time.value;
  newBook.brand = infoBook.brand.value;
  newBook.phone = infoBook.phone.value;
  newBook.name = infoBook.name.value;
  newBook.work = infoBook.work.value;
  newBook.registerSign = infoBook.registerSign.value;
  newBook.carMileage = infoBook.carMileage.value;
  newBook.yearIssue = infoBook.yearIssue.value;
  newBook.priceWork = infoBook.priceWorke.value;
  newBook.priceParts = infoBook.priceParts.value;

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
}

class RenderBook {
  constructor() {}
  strBook(element, array, masterId) {
    // debugger;
    element.innerText = null;
    array.getByMasterId(masterId).forEach((element, index) => {
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
  }

  srtAutoInfo(element, array, callback, callback2) {
    element.innerText = null;
    array.forEach(function(element, index) {
      callback(element, index);
      callback2();
    });
  }
}

class BooksTable {
  constructor(masterNameCategogy, masterId, array) {
    htmlElements.h2MasterInfo.innerText = masterNameCategogy;

    Clock.prototype.init();

    new RenderBook().strBook(htmlElements.bookTbody, array, masterId);

    //переодически нужно рендерить renderBook чтобы перекрашивался
    const threeMinutes = 180000;

    setInterval(() => {
      new RenderBook().strBook(htmlElements.bookTbody, array, masterId);
    }, threeMinutes);
  }
}

export { BooksTable, infoCar, infoOrder, RenderBook };
