import { masterNameCategogy } from "./login.js";
import { masterBook } from "./login.js";
import { Clock } from "./clock.js";

const htmlElements = {
  container: document.querySelector(".container"),
  tabs: document.querySelector(".tabs"),
  divMaster: document.querySelector(".masterInfo"),
  output: document.querySelector(".output"),
  h2MasterInfo: document.querySelector("div>h2"),
  bookTable: document.querySelector(".table"),
  thead: document.querySelector(".table > thead"),
  bookTbody: document.querySelector(".table > tbody"),
  tr: document.querySelector("thead > tr"),
  buttonBook:document.querySelector("form > input"),
  divMasterInToBook:document.querySelector("div.shadow-sm.p-3.mb-5.bg-white.rounded.col-6.offset-3.mt-5"),
};

function CreatTh(text) {
  htmlElements.th = document.createElement("th");
  htmlElements.th.scope = "col";
  htmlElements.th.innerText = text;
  htmlElements.tr.appendChild(htmlElements.th);
}

function renderBook() {
  htmlElements.bookTbody.innerText = "";
  let i = 0;
  masterBook.forEach(function(element) {
    creatBoofing(
      ++i,
      element.time,
      element.brand,
      element.phone,
      element.name,
      element.work
    );
  });
}

function creatBoofing(number, time, brand, phone, name, work) {
  htmlElements.thNumber = document.createElement("th");
  htmlElements.thNumber.innerText = number;

  htmlElements.tdTime = document.createElement("td");
  htmlElements.tdTime.innerText = time;
  // перекраска таймера должна сейчас произойти
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

  htmlElements.trBookInfo = document.createElement("tr");
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
}

///перекраска тайма
function onANavClicked() {
  const cirrentTime = new Date();
  const timeStrong = cirrentTime.toTimeString();
  const timeShort = timeStrong.split(" ")[0];
  const arrayThisTime = timeShort.split(":");
  let timeThis = arrayThisTime[0] * 3600000 + arrayThisTime[1] * 60000;
  const arrayBokeTime = htmlElements.tdTime.innerText.split(":");
  let bookTime = arrayBokeTime[0] * 3600000 + arrayBokeTime[1] * 60000;
  let difference = bookTime - timeThis;

  switch (true) {
    case difference <= 0:
      htmlElements.tdTime.classList.add("text-danger");
      break;
    //30 Minets
    case difference <= 1800000:
      htmlElements.tdTime.classList.add("text-warning");
      break;
    //60 Minets
    case difference <= 3600000:
      htmlElements.tdTime.classList.add("text-success");
      break;
    default:
      htmlElements.tdTime.classList.add("text-body");
  }
}

// Изменение контена для Work value
function chengeWork() {
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

  htmlElements.cheInputWorke.value = event.path[0].innerText;
  event.path[0].innerText = "";
  event.path[0].appendChild(htmlElements.cheInputWorke);
  event.path[0].appendChild(htmlElements.cheButtontWorke);
  event.path[0].removeEventListener("dblclick", chengeWork);

  function aplayChengeWork() {
    const elements = htmlElements.bookTbody.getElementsByTagName("tr");
    const array = Array.from(elements);
    const index = array.indexOf(event.path[2]);
    masterBook[index].work = htmlElements.cheInputWorke.value;
    renderBook();
  }
}

function onButtonIcoClearClicked() {
  const elements = htmlElements.bookTbody.getElementsByTagName("tr");
  const array = Array.from(elements);
  const index = array.indexOf(event.path[2]);
  masterBook.splice(index, 1);
  renderBook();
}

htmlElements.buttonBook.addEventListener("click", onButtonToBookClicked);

function onButtonToBookClicked() {
  let time = document.getElementById("formGroupExampleInputTime").value;
  let brand = document.getElementById("formGroupExampleInputBrand").value;
  let phone = document.getElementById("formGroupExampleInputPhone").value;
  let name = document.getElementById("formGroupExampleInputName").value;
  let work = document.getElementById("formGroupExampleInputWork").value;
  let registerSign = document.getElementById(
    "formGroupExampleInputRegisterSign"
  ).value;
  let carMileage = document.getElementById("formGroupExampleInputCarMileage")
    .value;
  let price = document.getElementById("formGroupExampleInputPrice").value;
  masterBook.push({
    time,
    brand,
    phone,
    name,
    work,
    registerSign,
    carMileage,
    price
  });

  masterBook.sort(function(a, b) {
    if (a.time > b.time) {
      return 1;
    }
    if (a.time < b.time) {
      return -1;
    }
    return 0;
  });

  htmlElements.form = document.querySelector("div.shadow-sm.p-3 > form");
  const f = htmlElements.form.getElementsByTagName('input');
  const arrayInput = Array.from(f);
  arrayInput.forEach((element)=>{
    element.value = "";
  })
  htmlElements.buttonBook.value ="Book";

  renderBook();
}

new CreatTh("№");
new CreatTh("Time");
new CreatTh("Brand");
new CreatTh("Phone");
new CreatTh("Name");
new CreatTh("Work");
new CreatTh("Submit");

function creatElement() {
  renderBook();
  //переодически нужно рендерить renderBook чтобы перекрашивался
  let renderBookInterval = setInterval(renderBook, 180000);
}

function Book() {
  htmlElements.h2MasterInfo.innerText = masterNameCategogy;
  Clock.prototype.init();

  creatElement();
}

export { Book };
