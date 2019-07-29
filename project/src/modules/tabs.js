import { switchCase } from "./switchCase.js";

const disClass = "disabled";

const htmlElements = {
  autoInfo:document.querySelector(".autoInfo"),
 masterInfo: document.querySelector(".masterInfo"),

  navA: document.querySelectorAll("ul>li>a"),
  tabs: document.querySelectorAll(".tabs"),

};

const onTabsClick = (event) => {

  arrayElements.forEach(element => {
    element.classList.remove(disClass);
  });

  event.srcElement.classList.add(disClass);

  const elementDataAttribute = event.target.dataset.mode;
  console.log(elementDataAttribute);

  const arrayTabs = Array.from(htmlElements.tabs[0].children);


  arrayTabs.forEach(element => {
    element.classList.add("hidden");
  });

  ///////// НЕ ЗАРАБОТАТАЛО !!!!!!!!!!!!!!!!!!!!
  
  const modeList = {
    "Master":htmlElements.masterInfo.classList.remove("hidden"),
    "Auto": htmlElements.autoInfo.classList.remove("hidden"),
    };


  if(elementDataAttribute in modeList) {
    modeList[elementDataAttribute];
  }else{
    throw new Error('Error in onTabsClick module tabs str 33')
  };


  // new switchCase(elementDataAttribute);

};

const arrayElements = Array.from(htmlElements.navA);
arrayElements.forEach(element => {
  element.addEventListener("click", onTabsClick);
});

function Tabs() {}

export { Tabs };
