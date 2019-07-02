import {masterNameCategogy} from "./login.js";


const bookArray = [
  {
    time:"16:00",
    brand:"Lada",
    phone:"+375293767082",
    name:"Vasiliy Petrovich",
    work:"Еiming belt replacement",
    registerSign: "7785AA-4",
    carMileage: 222000,
  },
  {
    time: "16:00",
    brand:"Lada",
    phone:"+375293767082",
    name:"Vasiliy Petrovich",
    work:"Еiming belt replacement",
    registerSign: "7785AA-4",
    carMileage: 222000,
  },
  {
    time: "16:00",
    brand:"Lada",
    phone:"+375293767082",
    name:"Vasiliy Petrovich",
    work:"Еiming belt replacement",
    registerSign: "7785AA-4",
    carMileage: 222000,
  }
];


function Book() {

  const htmlElement = {
    container: document.querySelector(".container"),
    tabs: document.querySelector(".tabs")
  };

  function creatElement() {
    htmlElement.output = document.createElement("div");
    htmlElement.output.classList.add("output");

    htmlElement.h2MasterInfo = document.createElement("h2");
    htmlElement.h2MasterInfo.innerText = masterNameCategogy;

    htmlElement.bookTable = document.createElement("table");
    htmlElement.bookTable.classList.add("table");

    htmlElement.thead = document.createElement("thead");
    htmlElement.tr = document.createElement("tr");
      
      function CreatTh(text){
        htmlElement.th = document.createElement("th");
        htmlElement.th.scope = "col";
        htmlElement.th.innerText = text;
        htmlElement.tr.appendChild(htmlElement.th);
      }
      

      htmlElement.tabs.appendChild(htmlElement.output);
      htmlElement.output.appendChild(htmlElement.h2MasterInfo);
      htmlElement.output.appendChild(htmlElement.bookTable);
      htmlElement.bookTable.appendChild(htmlElement.thead);
      htmlElement.thead.appendChild(htmlElement.tr);

      const th1 = new CreatTh("№");
      const th2 = new CreatTh("Time");
      const th3 = new CreatTh("Brand");
      const th4 = new CreatTh("Phone");
      const th5 = new CreatTh("Name");
      const th6 = new CreatTh("Work");
      const th7 = new CreatTh("Submit");


      htmlElement.bookTbody = document.createElement("tbody");
     


      function CreatBoofing(number, time, brand, phone, name, work){
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

        htmlElement.tdButtons = document.createElement("td");

        htmlElement.buttonIcoCheck = document.createElement("i");
        htmlElement.buttonIcoCheck.classList.add("fa", "fa-check-circle","fa-lg", "text-success");
        

        htmlElement.buttonIcoClear = document.createElement("i");
        htmlElement.buttonIcoClear.classList.add("fa", "fa-times-circle","fa-lg", "text-danger");
   

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
      }

      //Это будет рисоваться перебором масива функция renderBook
      const book1 = new CreatBoofing(1,bookArray[0].time, bookArray[0].brand, bookArray[0].phone, bookArray[0].name, bookArray[0].work);
      const book2 = new CreatBoofing(2,bookArray[1].time, bookArray[1].brand, bookArray[1].phone, bookArray[1].name, bookArray[1].work);
      const book3 = new CreatBoofing(3,bookArray[2].time, bookArray[2].brand, bookArray[2].phone, bookArray[2].name, bookArray[2].work );



  }
  creatElement();
}

export { Book };
