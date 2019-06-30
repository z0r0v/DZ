function Loggin(){

const htmlElements = {
  container:document.querySelector(".container"),
  tabs:document.querySelector(".tabs"),
}

function createElement(){
  htmlElements.masterInfo = document.createElement("div, [data-mode='masterInfo']");
  htmlElements.masterInfo.classList.add("col-md-auto");

  htmlElements.formLoggin = document.createElement("form, [data-mode='masterInfo']");
  htmlElements.formLoggin.classList.add("col-md-8, offset-md-2, shadow-sm, p-3, mb-5, bg-white, rounded");


  htmlElements.tabs.appendchild(htmlElements.masterInfo);
  htmlElements.masterInfo.appendchild(htmlElements.formLoggin);
}
createElement();

}

export {Loggin};