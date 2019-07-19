import {infoCar, infoOrder} from "./book.js";

const htmlElements = {
  executedOrder:document.querySelector(".executedOrder"),
  carInfo:document.querySelector(".carInfo"),
  tr:document.querySelector(".executedOrder > tr"),
}

function AutoInfo(){}

AutoInfo.prototype.creatTableOrder = () => {
  //если не создавать а просто навешивать ?
  
  htmlElements.carInfo.innerText = infoCar;
  htmlElements.work = document.createElement("td");
  htmlElements.time = document.createElement("td");
  htmlElements.price = document.createElement("td");
  htmlElements.executedOrder.appendChild( htmlElements.tr);
  htmlElements.tr.appendChild( htmlElements.work);
  htmlElements.tr.appendChild( htmlElements.time);
  htmlElements.tr.appendChild( htmlElements.price);

  htmlElements.work.innerText = infoOrder.work;
  htmlElements.time.innerText = infoOrder.time;
  htmlElements.price.innerText = `${infoOrder.price}$`;
}




export {AutoInfo};