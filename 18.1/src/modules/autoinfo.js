import { infoCar, infoOrder, startTime } from "./book.js";
import { carOwners } from "./carDatabase.js";

const htmlElements = {
  executedOrder: document.querySelector(".executedOrder"),
  carInfo: document.querySelector(".carInfo"),
  trExecutedOrder: document.querySelector(".executedOrder > tr"),
  td: document.querySelectorAll(".executedOrder > tr > td"),
  replaced: document.querySelector(".replaced > tbody")
};

function AutoInfo() {}

AutoInfo.prototype.creatTableOrder = () => {
  htmlElements.carInfo.innerText = infoCar;
  htmlElements.work = document.createElement("td");
  htmlElements.work.classList.add("text-left");
  htmlElements.time = document.createElement("td");
  htmlElements.price = document.createElement("td");
  htmlElements.executedOrder.appendChild(htmlElements.trExecutedOrder);
  htmlElements.trExecutedOrder.appendChild(htmlElements.work);
  htmlElements.trExecutedOrder.appendChild(htmlElements.time);
  htmlElements.trExecutedOrder.appendChild(htmlElements.price);
  const stopWotch = new StopWotch();
  stopWotch.init();
  htmlElements.work.innerText = infoOrder.work;
  htmlElements.time.innerText = infoOrder.time;
  htmlElements.price.innerText = `${infoOrder.price}$`;
};

//Пока не допер как разнести на разные модули
let differenceMilliseconds = 0;
let totalSecondsDifference = 0;
let differenceSeconds = 0;
const runTime = () => {
  differenceMilliseconds = new Date().getTime() - startTime;
  differenceSeconds =
    Math.round(differenceMilliseconds / 1000) + totalSecondsDifference;

  let seconds = parseInt(differenceSeconds % 60);
  let minutes = parseInt((differenceSeconds / 60) % 60);
  let hours = parseInt((differenceSeconds / 3600) % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  //Не могу вынести элемент в другой модуль
  htmlElements.time.innerText = `${hours}:${minutes}:${seconds}`;
};
function StopWotch() {}
StopWotch.prototype.init = function() {
  setInterval(runTime, 1000);
  runTime();
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
  htmlElements.trReplaced = document.createElement("tr");
  htmlElements.replaced.appendChild(htmlElements.trReplaced);

  htmlElements.thIndex = document.createElement("th");
  htmlElements.thIndex.scope = "row";
  htmlElements.thIndex.innerText = index;
  htmlElements.trReplaced.appendChild(htmlElements.thIndex);

  htmlElements.tdCarMileage = document.createElement("td");
  htmlElements.tdCarMileage.innerText = carMileage;
  htmlElements.trReplaced.appendChild(htmlElements.tdCarMileage);

  htmlElements.tdDate = document.createElement("td");
  htmlElements.tdDate.innerText = date;
  htmlElements.trReplaced.appendChild(htmlElements.tdDate);

  htmlElements.tdWork = document.createElement("td");
  htmlElements.tdWork.innerText = work;
  htmlElements.trReplaced.appendChild(htmlElements.tdWork);

  htmlElements.tdpriceParts = document.createElement("td");
  htmlElements.tdpriceParts.innerText = `${priceParts}$`;
  htmlElements.trReplaced.appendChild(htmlElements.tdpriceParts);

  htmlElements.tdPriceWork = document.createElement("td");
  htmlElements.tdPriceWork.innerText = `${priceWork}$`;
  htmlElements.trReplaced.appendChild(htmlElements.tdPriceWork);
};

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
  });
};

//придумать как суда передавать именно этот масив
renderReplaced(carOwners[0].car.replacementParts);

export { AutoInfo };
