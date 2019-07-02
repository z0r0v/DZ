


function Login(){

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
  htmlElements.h2MasterInfo.innerText = "Master Login";

  htmlElements.formLogin = document.createElement("form");
  htmlElements.formLogin.classList.add("col-md-8", "offset-md-2", "shadow-sm", "p-3", "mb-5", "bg-white", "rounded");
  
  htmlElements.formButton = document.createElement("button");
  htmlElements.formButton.type = "submit";
  htmlElements.formButton.classList.add("btn", "btn-primary", "col-md-12");
  htmlElements.formButton.innerText = "Submit";

  function CreatingGroupElements(innerText, type){
    htmlElements.divFormgroup = document.createElement("div");
    htmlElements.divFormgroup.classList.add("form-group");
  
    htmlElements.labelLogin = document.createElement("label");
    htmlElements.labelLogin.htmlFor = `exampleInput${innerText}`;
    htmlElements.labelLogin.innerText = innerText;
  
    htmlElements.inputLogin = document.createElement("input");
    htmlElements.inputLogin.classList.add("form-control");
    htmlElements.inputLogin.type = type;
    htmlElements.inputLogin.id = `exampleInput${innerText}`;
    htmlElements.inputLogin.placeholder = `Enter you ${innerText.toLowerCase()}`;
    htmlElements.inputLogin.ariaDescribedby = "emailHelp";


    htmlElements.formLogin.appendChild(htmlElements.divFormgroup);
    htmlElements.divFormgroup.appendChild(htmlElements.labelLogin);
    htmlElements.divFormgroup.appendChild(htmlElements.inputLogin);
  }
  
  htmlElements.tabs.appendChild(htmlElements.divMasterInfo);
  htmlElements.divMasterInfo.appendChild(htmlElements.formLogin);
  htmlElements.formLogin.appendChild(htmlElements.h2MasterInfo);

  const divGroupLoggin = new CreatingGroupElements("Loggin", "text");
  const divGroupPassword = new CreatingGroupElements("Password","password");

  htmlElements.formLogin.appendChild(htmlElements.formButton);
  htmlElements.formButton.addEventListener('click', onButtonlogInClicked);
}


function onButtonlogInClicked(){
  if(checkPassword() === true){
    alert('OK');
    // тут функция хайден класс
  }
  else{
    //тут функция которая красит цветомв красный
  }
}

function checkPassword(){
  // Принимаем занчание из фалью лгин и пароль
  let loginName;
  let pasword;
  // масссив с логинами и паролями мастеров нужен будет перебор масива
  if(pasword !== 'q1w2e3' && loginName !== "master"){
    return checkPassword()
  }
  else{
    return true;
  }
}

createElement();

}

export {Login};