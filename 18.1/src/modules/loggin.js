function Loggin(){

const htmlElements = {
  container:document.querySelector(".container"),
  tabs:document.querySelector(".tabs"),
}

function createElement(){
  htmlElements.divMasterInfo = document.createElement("div");
  htmlElements.divMasterInfo.classList.add("col-md-auto");
  htmlElements.divMasterInfo.dataMode = "masterInfo";

  htmlElements.h2MasterInfo = document.createElement("h2");
  htmlElements.h2MasterInfo.classList.add("text-center");
  htmlElements.h2MasterInfo.innerText = "Master Info";


  htmlElements.formLoggin = document.createElement("form");
  htmlElements.formLoggin.classList.add("col-md-8", "offset-md-2", "shadow-sm", "p-3", "mb-5", "bg-white", "rounded");
  
 
  htmlElements.fotmBtn = document.createElement("button");
  htmlElements.fotmBtn.type = "submit";
  htmlElements.fotmBtn.classList.add("btn", "btn-primary", "col-md-12");
  htmlElements.fotmBtn.innerText = "Submit";


  function CreatingGroupElements(innerText){
    htmlElements.divFormgroup = document.createElement("div");
    htmlElements.divFormgroup.classList.add("form-group");
  
    htmlElements.labelLogin = document.createElement("label");
    htmlElements.labelLogin.htmlFor = `exampleInput${innerText}`;
    htmlElements.labelLogin.innerText = innerText;
  
    htmlElements.inputLogin = document.createElement("input");
    htmlElements.inputLogin.classList.add("form-control");
    htmlElements.inputLogin.type = "text";
    htmlElements.inputLogin.id = `exampleInput${innerText}`;
    htmlElements.inputLogin.placeholder = `Enter you ${innerText.toLowerCase()}`;
    htmlElements.inputLogin.ariaDescribedby = "emailHelp";


    htmlElements.formLoggin.appendChild(htmlElements.divFormgroup);
    htmlElements.divFormgroup.appendChild(htmlElements.labelLogin);
    htmlElements.divFormgroup.appendChild(htmlElements.inputLogin);
  }
  
  htmlElements.tabs.appendChild(htmlElements.divMasterInfo);
  htmlElements.divMasterInfo.appendChild(htmlElements.formLoggin);
  htmlElements.formLoggin.appendChild(htmlElements.h2MasterInfo);
  const divGroupLoggin = new CreatingGroupElements("Loggin");
  const divGroupPassword = new CreatingGroupElements("Password");
  htmlElements.formLoggin.appendChild(htmlElements.fotmBtn);
}

createElement();

}

export {Loggin};