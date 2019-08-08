import { RenderBook } from "./reexport.js";

const htmlElements = {
  td: document.querySelectorAll(".executedOrder > tr > td"),
  replaced: document.querySelector(".replaced > tbody"),
  futureWorkPlan: document.querySelector(".futureWorkPlan > tbody"),
  requiresReplacement: document.querySelector(".requiresReplacement > tbody"),
  trReplaced:document.querySelector(".replaced > tbody > tr"),
  carMileage:document.querySelector(".requiresReplacement > tbody> tr >td")
};


const element = htmlElements.futureWorkPlan;
const element2 = htmlElements.requiresReplacement;

const arrayParam = ["replacementMileage","data","work","priceParts","priceWork"];

const creatAuroInfo = (element, arayElement, idBook, number) => {

  ////ПРЕПСИВАТЬ ЭТУ ЧАСТЬ ПОД ТОЧ ТО БУДЕТ РИСОВАТЬ НАШИ ФОРМЫ !!!!!

    // const trBookInfo = document.createElement("tr");
    // trBookInfo.id = idBook;
    // element.appendChild(trBookInfo);
  
    // const thNumber = document.createElement("th");
    // thNumber.innerText = number;
    // trBookInfo.appendChild(thNumber);
    // createBookHelper(arayElement, trBookInfo);
  
    // const checkCircle = "fa-check-circle";
    // const timesCircle = "fa-times-circle";
    // const success = "text-success";
    // const danger = "text-danger";
  
    // const tdButtons = document.createElement("td");
    // trBookInfo.appendChild(tdButtons);
  
    // creatButtons(tdButtons, checkCircle, success, addInNewMasive);
    // creatButtons(tdButtons, timesCircle, danger, onButtonIcoClearClicked);



  };

class SrtAutoInfo{
  constructor(element, array, arrayParam){
    element.innerText = null;
    array.forEach(function(element, index) {
    //   creatAuroInfo(
    //   ++index,
    //   element[arrayParam[0]],
    //   element[arrayParam[1]],
    //   element[arrayParam[2]],
    //   element[arrayParam[3]],
    //   element[arrayParam[4]],
    //   element[arrayParam[5]]
    // )
  });
  };
};


class AutoInfo{
  constructor(owner){
    this.array = owner;
    this.element = element;
    this.element2 = element2;
    this.arrayParam = arrayParam;
  };
// Два метода под отрисовку планов !!!!!!!
  future(cars){
    new SrtAutoInfo(this.element, cars, this.arrayParam);
    console.log(cars);
    console.log(this.element);
  };

  requires(cars){
    // new RenderBook().srtAutoInfo(this.element2, this.array, this.arrayParam);
    // console.log(cars);
    // console.log(this.element2);
  };
};

 




export { AutoInfo };
