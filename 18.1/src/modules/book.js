import { masterNameCategogy } from "./login.js";
import { bookArray } from "./carDatabase.js";


const htmlElement = {
  container: document.querySelector(".container"),
  tabs: document.querySelector(".tabs"),
 
};


function Book() {

  function creatElement() {
    htmlElement.output = document.createElement("div");
    htmlElement.output.classList.add("output");

    htmlElement.h2MasterInfo = document.createElement("h2");
    htmlElement.h2MasterInfo.innerText = masterNameCategogy;

    htmlElement.outputClock = document.createElement("div");
    htmlElement.outputClock.classList.add("outputClock");

    function onClockNextTick() {
      const cirrentTime = new Date();
      const timeStrong = cirrentTime.toTimeString();
      const timeShort = timeStrong.split(" ")[0];
      htmlElement.outputClock.innerText = timeShort;
    }

    const timerId = setInterval(onClockNextTick, 1000);

    htmlElement.bookTable = document.createElement("table");
    htmlElement.bookTable.classList.add("table");

    htmlElement.thead = document.createElement("thead");
    htmlElement.tr = document.createElement("tr");

    function CreatTh(text) {
      htmlElement.th = document.createElement("th");
      htmlElement.th.scope = "col";
      htmlElement.th.innerText = text;
      htmlElement.tr.appendChild(htmlElement.th);
    }

    

    htmlElement.tabs.appendChild(htmlElement.output);
    htmlElement.output.appendChild(htmlElement.h2MasterInfo);

    htmlElement.output.appendChild(htmlElement.outputClock);
    htmlElement.output.appendChild(htmlElement.bookTable);
    htmlElement.bookTable.appendChild(htmlElement.thead);
    htmlElement.thead.appendChild(htmlElement.tr);


    new CreatTh("№");
    new CreatTh("Time");
    new CreatTh("Brand");
    new CreatTh("Phone");
    new CreatTh("Name");
    new CreatTh("Work");
    new CreatTh("Submit");

    htmlElement.bookTbody = document.createElement("tbody");

    function creatBoofing(number, time, brand, phone, name, work) {
      htmlElement.thNumber = document.createElement("th");
      htmlElement.thNumber.innerText = number;

      htmlElement.tdTime = document.createElement("td");
      htmlElement.tdTime.innerText = time;

      htmlElement.tdBrand = document.createElement("td");
      htmlElement.tdBrand.innerText = brand;

      htmlElement.tdPhone = document.createElement("td");
      htmlElement.tdPhone.innerText = phone;

      htmlElement.tdName = document.createElement("td");
      htmlElement.tdName.innerText = name;

      htmlElement.tdWork = document.createElement("td");
      htmlElement.tdWork.innerText = work;
     
      htmlElement.tdWork.addEventListener('dblclick', chengeWork);

      htmlElement.tdButtons = document.createElement("td");

      htmlElement.buttonIcoCheck = document.createElement("i");
      htmlElement.buttonIcoCheck.classList.add(
        "fa",
        "fa-check-circle",
        "fa-lg",
        "text-success"
      );

      htmlElement.buttonIcoClear = document.createElement("i");
      htmlElement.buttonIcoClear.classList.add(
        "fa",
        "fa-times-circle",
        "fa-lg",
        "text-danger"
      );
      htmlElement.buttonIcoClear.addEventListener(
        "click",
        onButtonIcoClearClicked
      );

      htmlElement.trBookInfo = document.createElement("tr");

      htmlElement.bookTable.appendChild(htmlElement.bookTbody);
      htmlElement.bookTbody.appendChild(htmlElement.trBookInfo);

      htmlElement.trBookInfo.appendChild(htmlElement.thNumber);
      htmlElement.trBookInfo.appendChild(htmlElement.tdTime);
      htmlElement.trBookInfo.appendChild(htmlElement.tdBrand);
      htmlElement.trBookInfo.appendChild(htmlElement.tdPhone);
      htmlElement.trBookInfo.appendChild(htmlElement.tdName);
      htmlElement.trBookInfo.appendChild(htmlElement.tdWork);

      htmlElement.tdButtons.appendChild(htmlElement.buttonIcoClear);
      htmlElement.tdButtons.appendChild(htmlElement.buttonIcoCheck);

      htmlElement.trBookInfo.appendChild(htmlElement.tdButtons);

      // Изменение контена для Work value
        function chengeWork(){
          htmlElement.cheInputWorke = document.createElement('input');
          htmlElement.cheButtontWorke = document.createElement('button');
          htmlElement.cheButtontWorke.innerText = "aplay";
          htmlElement.cheButtontWorke.classList.add("btn", "btn-outline-primary", "btn-sm", "col-md-12")
          htmlElement.cheButtontWorke.addEventListener('click', aplayChengeWork);

          htmlElement.cheInputWorke.value = event.path[0].innerText;
          event.path[0].innerText = '';
          event.path[0].appendChild(htmlElement.cheInputWorke);
          event.path[0].appendChild(htmlElement.cheButtontWorke);
          event.path[0].removeEventListener('dblclick', chengeWork);

          function aplayChengeWork(){
            const elements = htmlElement.bookTbody.getElementsByTagName("tr");
            const array = Array.from(elements);
            const index = array.indexOf(event.path[2]);
            bookArray[index].work = htmlElement.cheInputWorke.value;
            renderBook();
          }
        }

      ///перекраска тайма
      function onANavClicked() {
        const cirrentTime = new Date();
        const timeStrong = cirrentTime.toTimeString();
        const timeShort = timeStrong.split(" ")[0];
        const arrayThisTime = timeShort.split(":");

        let timeThis = arrayThisTime[0] * 3600000 + arrayThisTime[1] * 60000;

        const arrayBokeTime = htmlElement.tdTime.innerText.split(":");

        let bookTime = arrayBokeTime[0] * 3600000 + arrayBokeTime[1] * 60000;

        let difference = bookTime - timeThis;

        switch (true) {
          case difference <= 0:
            htmlElement.tdTime.classList.add("text-danger");
            break;
            //30 Minets
          case difference <= 1800000:
            htmlElement.tdTime.classList.add("text-warning");
            break;
            //60 Minets
          case difference <= 3600000:
            htmlElement.tdTime.classList.add("text-success");
            break;
          default:
            htmlElement.tdTime.classList.add("text-body");
        }
      }
      onANavClicked();
    }

    function renderBook() {
      htmlElement.bookTbody.innerText = "";
      let i = 0;
      bookArray.forEach(function(element) {
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
    renderBook();
    //переодически нужно рендерить renderBook чтобы перекрашивался
    let renderBookInterval = setInterval(renderBook, 300000);
    

    function onButtonIcoClearClicked() {
      const elements = htmlElement.bookTbody.getElementsByTagName("tr");
      const array = Array.from(elements);
      const index = array.indexOf(event.path[2]);
      bookArray.splice(index, 1);
      renderBook();
    }
    
    function renderMasterInToBook() {
      htmlElement.divMasterInToBook = document.createElement("div");
      htmlElement.divMasterInToBook.classList.add(
        "shadow-sm",
        "p-3",
        "mb-5",
        "bg-white",
        "rounded",
        "col-6",
        "offset-3"
      );

      htmlElement.divMasterInToBook.dataMode = "masterInToBook";
      htmlElement.h2MasterInToBook = document.createElement("h2");
      htmlElement.h2MasterInToBook.innerText = "Book To Master";
      htmlElement.h2MasterInToBook.classList.add('text-center');

      htmlElement.form = document.createElement("form");
      htmlElement.buttonToBook = document.createElement("input");
      htmlElement.buttonToBook.type = "button";
      htmlElement.buttonToBook.classList.add("btn", "btn-primary");
      htmlElement.buttonToBook.value = "To Book";
      htmlElement.buttonToBook.addEventListener("click", onButtonToBookClicked);

      function creatingGroupElements(value, innerText, type) {
        htmlElement.divFormGroup = document.createElement("div");
        htmlElement.divFormGroup.classList.add("form-group");

        htmlElement.labelFormGroup = document.createElement("label");
        htmlElement.labelFormGroup.htmlFor = `formGroupExampleInput${value}`;
        htmlElement.labelFormGroup.innerText = innerText;

        htmlElement.inputFormGroup = document.createElement("input");
        htmlElement.inputFormGroup.type = type;
        htmlElement.inputFormGroup.classList.add("form-control");
        htmlElement.inputFormGroup.id = `formGroupExampleInput${value}`;
        htmlElement.inputFormGroup.placeholder = `Enter ${innerText.toLowerCase()}`;
        htmlElement.inputFormGroup.value = null;

        htmlElement.divFormGroup.appendChild(htmlElement.labelFormGroup);
        htmlElement.divFormGroup.appendChild(htmlElement.inputFormGroup);
        htmlElement.form.appendChild(htmlElement.divFormGroup);
      }

      new creatingGroupElements("Time", "Book time", "time");
      new creatingGroupElements("Brand", "Car brand", "text");
      new creatingGroupElements("Phone", "Owner's phone number", "tel");
      new creatingGroupElements("Name", "Owner name", "text");
      new creatingGroupElements("Work", "Type of work performed", "text");
      new creatingGroupElements("RegisterSign", "Register sign", "number");
      new creatingGroupElements("CarMileage", "Car mileage", "number");
      new creatingGroupElements("Price", "Price", "number");

      htmlElement.tabs.appendChild(htmlElement.divMasterInToBook);
      htmlElement.divMasterInToBook.appendChild(htmlElement.h2MasterInToBook);
      htmlElement.divMasterInToBook.appendChild(htmlElement.form);
      htmlElement.form.appendChild(htmlElement.buttonToBook);
    }
    
    renderMasterInToBook();

    function onButtonToBookClicked() {
      let time = document.getElementById("formGroupExampleInputTime").value;
      let brand = document.getElementById("formGroupExampleInputBrand").value;
      let phone = document.getElementById("formGroupExampleInputPhone").value;
      let name = document.getElementById("formGroupExampleInputName").value;
      let work = document.getElementById("formGroupExampleInputWork").value;
      let registerSign = document.getElementById(
        "formGroupExampleInputRegisterSign"
      ).value;
      let carMileage = document.getElementById(
        "formGroupExampleInputCarMileage"
      ).value;
      let price = document.getElementById("formGroupExampleInputPrice").value;
      bookArray.push({
        time,
        brand,
        phone,
        name,
        work,
        registerSign,
        carMileage,
        price
      });

      bookArray.sort(function(a, b) {
        if (a.time > b.time) {
          return 1;
        }
        if (a.time < b.time) {
          return -1;
        }
        return 0;
      });

      htmlElement.divMasterInToBook.innerText = null;
      htmlElement.divMasterInToBook.classList.remove(
        "shadow-sm",
        "p-3",
        "mb-5",
        "bg-white",
        "rounded",
        "col-6",
        "offset-3"
      );
      
      renderMasterInToBook();
      renderBook();
    }
  }
  creatElement();
}

export { Book };
