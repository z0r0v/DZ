import { UserServiceFetch} from "./reexport.js";
import { carsOwners, CarsOwnersCeate } from "./reexport.js";

import { RenderBook } from "./reexport.js";


const htmlElements = {
  td: document.querySelectorAll(".executedOrder > tr > td"),
  replaced: document.querySelector(".replaced > tbody"),
  futureWorkPlan: document.querySelector(".futureWorkPlan > tbody"),
  requiresReplacement: document.querySelector(".requiresReplacement > tbody"),
  trReplaced:document.querySelector(".replaced > tbody > tr"),
  carMileage:document.querySelector(".requiresReplacement > tbody> tr >td")
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
      createTable(htmlElements.futureWorkPlan, htmlElements.trReplaced);
    }
  });
};

class AutoInfo{
  constructor(){};

  init(){
    
  };
};


export { AutoInfo };
