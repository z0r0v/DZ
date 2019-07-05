import { masterArray } from "./materDataBase.js";
import {Book} from './book.js'

export let masterNameCategogy;

function Login() {
  const htmlElements = {
    container: document.querySelector(".container"),
    tabs: document.querySelector(".tabs")
  };

  function createElement() {
    htmlElements.divMasterInfo = document.createElement("div");
    htmlElements.divMasterInfo.classList.add("col-md-auto");
    htmlElements.divMasterInfo.dataMode = "masterInfo";

    htmlElements.h2MasterInfo = document.createElement("h2");
    htmlElements.h2MasterInfo.classList.add("text-center");
    htmlElements.h2MasterInfo.innerText = "Master Login";

    htmlElements.formLogin = document.createElement("form");
    htmlElements.formLogin.classList.add(
      "col-md-8",
      "offset-md-2",
      "shadow-sm",
      "p-3",
      "mb-5",
      "bg-white",
      "rounded"
    );

    htmlElements.formButton = document.createElement("input");
    htmlElements.formButton.type = "button";
    htmlElements.formButton.classList.add("btn", "btn-primary", "col-md-12");
    htmlElements.formButton.value = "Submit";

    function CreatingGroupElements(innerText, type) {
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
    const divGroupPassword = new CreatingGroupElements("Password", "password");

    htmlElements.formLogin.appendChild(htmlElements.formButton);
    htmlElements.formButton.addEventListener("click", onButtonCheckPassword);
  }

  createElement();

  function onButtonCheckPassword() {
    const loginName = document.getElementById("exampleInputLoggin");
    const pasword = document.getElementById("exampleInputPassword");

    loginName.classList.remove("border-danger", "border-success");
    pasword.classList.remove("border-danger", "border-success");

    let isLogged = false;

    masterArray.forEach(function(item) {
      if (pasword.value === item.pasword && loginName.value === item.login) {
        masterNameCategogy = `Master: ${item.firstName} ${
          item.LastName
        }. Category: ${item.category}`;
        isLogged = true;
        return isLogged;
      }
    });
    if (isLogged) {
      loginName.classList.remove("border-danger");
      pasword.classList.remove("border-danger");
      loginName.classList.add("border-success");
      pasword.classList.add("border-success");
      htmlElements.divMasterInfo.classList.add("hidden");
      const newBook = new Book();
    
    } else {
      loginName.classList.add("border", "border-danger");
      pasword.classList.add("border", "border-danger");
      loginName.value = "";
      pasword.value = "";
      loginName.placeholder = "Password or login is entered incorrectly!";
      pasword.placeholder = "Password or login is entered incorrectly!";
    }
    return masterNameCategogy;
  }
}

export { Login };
