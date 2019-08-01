import { UserServiceFetch} from "./reexport.js";
import { carsOwners, CarsOwnersCeate } from "./reexport.js";
import { apendHelpper } from "./reexport.js";


//временно 
import { RenderBook } from "./reexport.js";
// import { books, Book } from "./reexport.js";
// import { masterId } from "./reexport.js";




const htmlElements = {
  td: document.querySelectorAll(".executedOrder > tr > td"),
  replaced: document.querySelector(".replaced > tbody"),
  futureWorkPlan: document.querySelector(".futureWorkPlan > tbody"),
  requiresReplacement: document.querySelector(".requiresReplacement > tbody"),
  trReplaced:document.querySelector(".replaced > tbody > tr"),
  carMileage:document.querySelector(".requiresReplacement > tbody> tr >td")
};

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



const createTable = element => {
  console.log(htmlElements.trReplaced);
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

class AutoInfo{
  constructor(){};

  init(){
    const url = "https://my-server-dz25.herokuapp.com/carsOwners";
    new UserServiceFetch().getFetch(url).then(data => {
      new CarsOwnersCeate(data);
    
    const arra1 = carsOwners.carsOwners[0].car[0].replacementParts;
    new RenderBook().srtAutoInfo(
      htmlElements.replaced, 
      arra1, 
      creatReplaced, 
      createTable(htmlElements.replaced));
    //   // //придумать как суда передавать именно этот масив
    // renderReplaced(carsOwners.carsOwners[0].car[0].replacementParts);

    // // //придумать как суда передавать именно этот масив
    renderReplacementExpired(carsOwners.carsOwners[0].car[0].futureWorkPlan);
    });
  };
};


export { AutoInfo };
