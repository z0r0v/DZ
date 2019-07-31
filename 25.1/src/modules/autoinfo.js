import { infoCar, infoOrder } from "./reexport.js";
import { carsOwners } from "./reexport.js";
import { StopWotch } from "./reexport.js";
import { apendHelpper } from "./reexport.js";


//временно 
import { RenderBook } from "./reexport.js";
import { books, Book } from "./reexport.js";
import { masterId } from "./reexport.js";


const htmlElements = {
  executedOrder: document.querySelector(".executedOrder"),
  carInfo: document.querySelector(".carInfo"),
  trExecutedOrder: document.querySelector(".executedOrder > tr"),
  td: document.querySelectorAll(".executedOrder > tr > td"),
  replaced: document.querySelector(".replaced > tbody"),
  futureWorkPlan: document.querySelector(".futureWorkPlan > tbody"),
  requiresReplacement: document.querySelector(".requiresReplacement > tbody")
};

class AutoInfo{
  
};

const createTable = element => {
  element.appendChild(htmlElements.trReplaced);
  const arayElements = [
    htmlElements.thIndex,
    htmlElements.tdCarMileage,
    htmlElements.tdDate,
    htmlElements.tdWork,
    htmlElements.tdpriceParts,
    htmlElements.tdPriceWork
  ];
  apendHelpper(htmlElements.trReplaced, arayElements);
};

AutoInfo.prototype.creatTableOrder = startTime => {
  htmlElements.carInfo.innerText = infoCar;
  htmlElements.work = document.createElement("td");
  htmlElements.work.classList.add("text-left");
  htmlElements.time = document.createElement("td");
  htmlElements.price = document.createElement("td");

  htmlElements.executedOrder.appendChild(htmlElements.trExecutedOrder);
  const arayElements = [
    htmlElements.work,
    htmlElements.time,
    htmlElements.price
  ];
  apendHelpper(htmlElements.trExecutedOrder, arayElements);

  const element = htmlElements.time;
  const stopWotch = new StopWotch();
  stopWotch.init(element, startTime);
  htmlElements.work.innerText = infoOrder.work;
  htmlElements.price.innerText = `${infoOrder.price}$`;
};

htmlElements.carMileage = document.querySelector(
  ".requiresReplacement > tbody> tr >td"
);

const creatReplaced = (
  index,
  carMileage,
  date,
  work,
  priceParts,
  priceWork
) => {
  const topThree = carMileage.toString().substring(0, 3);
  const secondTrike = carMileage.toString().substring(3);

  htmlElements.trReplaced = document.createElement("tr");
  htmlElements.thIndex = document.createElement("th");
  htmlElements.thIndex.scope = "row";
  htmlElements.thIndex.innerText = index;
  htmlElements.tdCarMileage = document.createElement("td");
  htmlElements.tdCarMileage.innerText = `${topThree} ${secondTrike} km`;
  htmlElements.tdDate = document.createElement("td");
  htmlElements.tdDate.innerText = date;
  htmlElements.tdWork = document.createElement("td");
  htmlElements.tdWork.innerText = work;
  htmlElements.tdpriceParts = document.createElement("td");
  htmlElements.tdpriceParts.innerText = `${priceParts}$`;
  htmlElements.tdPriceWork = document.createElement("td");
  htmlElements.tdPriceWork.innerText = `${priceWork}$`;
};

//Можно и нужно переиспользовать с render();
const renderReplaced = array => {
  htmlElements.replaced.innerText = null;
  array.forEach(function(element, index) {
    creatReplaced(
      ++index,
      element.replacementMileage,
      element.data,
      element.work,
      element.priceWork,
      element.priceParts
    );
    createTable(htmlElements.replaced);
  });
};

const renderReplacementExpired = array => {
  htmlElements.futureWorkPlan.innerText = null;
  htmlElements.requiresReplacement.innerText = null;
  array.forEach(function(element, index) {
    if (!array[index].checkMileageCompare) {
      creatReplaced(
        //потом разобраться что сделать номер индексуеться по общему списку? пока отключены номера
        null,
        element.nextReplacementMileage,
        null,
        element.work,
        element.priceWork,
        element.priceParts
      );
      createTable(htmlElements.requiresReplacement);
    } else {
      creatReplaced(
        //потом разобраться что сделать номер индексуеться по общему списку? пока отключены номера
        null,
        element.nextReplacementMileage,
        null,
        element.work,
        element.priceWork,
        element.priceParts
      );
      createTable(htmlElements.futureWorkPlan);
    }
  });
};


// new RenderBook().strBook(htmlElements.futureWorkPlan, books, masterId);
// //придумать как суда передавать именно этот масив
// renderReplaced(carsOwners.carsOwners[0].car[0].replacementParts);

// //придумать как суда передавать именно этот масив
// renderReplacementExpired(carsOwners.carsOwners[0].car[0].futureWorkPlan);

export { AutoInfo };
