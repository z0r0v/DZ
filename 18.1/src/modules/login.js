import { masterArray } from "./materDataBase.js";
import { Book } from "./book.js";

export let masterNameCategogy;
export let masterBook;
let isLogged = false;

const htmlElementss = {
  container: document.querySelector(".container"),
  tabs: document.querySelector(".tabs"),
  divMaster: document.querySelector(".masterInfo"),
  output: document.querySelector(".output"),
  buttonLogout: document.querySelector(".masterInfo>.output>.row>input"),
  divMasterInToBook:document.querySelector("div.shadow-sm.p-3.mb-5.bg-white.rounded.col-6.offset-3.mt-5"),
};

htmlElementss.buttonLogout.addEventListener("click", onLogoutCuttonclick);
function onLogoutCuttonclick() {
  isLogged = false;
  htmlElementss.divMasterInfo.classList.remove("hidden");
  htmlElementss.output.classList.add("hidden");
  htmlElementss.divMasterInToBook.classList.add("hidden");
  //отрисовать статически забрать по другому!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  htmlElementss.inputLogin.value ="";
 

}

function Login() {
  function createElement() {
    htmlElementss.divMasterInfo = document.createElement("div");
    htmlElementss.divMasterInfo.classList.add("col-md-auto", "mt-5");
    htmlElementss.divMasterInfo.dataMode = "masterInfo";

    htmlElementss.tabs.appendChild(htmlElementss.divMaster);
    htmlElementss.divMaster.appendChild(htmlElementss.divMasterInfo);

    htmlElementss.h2MasterInfo = document.createElement("h2");
    htmlElementss.h2MasterInfo.classList.add("text-center");
    htmlElementss.h2MasterInfo.innerText = "Master Login";

    htmlElementss.formLogin = document.createElement("form");
    htmlElementss.formLogin.classList.add(
      "col-md-8",
      "offset-md-2",
      "shadow-sm",
      "p-3",
      "mb-5",
      "bg-white",
      "rounded"
    );

    htmlElementss.formButton = document.createElement("input");
    htmlElementss.formButton.type = "button";
    htmlElementss.formButton.classList.add("btn", "btn-primary", "col-md-12");
    htmlElementss.formButton.value = "Submit";

    function CreatingGroupElements(innerText, type) {
      htmlElementss.divFormgroup = document.createElement("div");
      htmlElementss.divFormgroup.classList.add("form-group");

      htmlElementss.labelLogin = document.createElement("label");
      htmlElementss.labelLogin.htmlFor = `exampleInput${innerText}`;
      htmlElementss.labelLogin.innerText = innerText;

      htmlElementss.inputLogin = document.createElement("input");
      htmlElementss.inputLogin.classList.add("form-control");
      htmlElementss.inputLogin.type = type;
      htmlElementss.inputLogin.id = `exampleInput${innerText}`;
      htmlElementss.inputLogin.placeholder = `Enter you ${innerText.toLowerCase()}`;
      htmlElementss.inputLogin.ariaDescribedby = "emailHelp";

      htmlElementss.formLogin.appendChild(htmlElementss.divFormgroup);
      htmlElementss.divFormgroup.appendChild(htmlElementss.labelLogin);
      htmlElementss.divFormgroup.appendChild(htmlElementss.inputLogin);
    }

    htmlElementss.divMasterInfo.appendChild(htmlElementss.formLogin);
    htmlElementss.formLogin.appendChild(htmlElementss.h2MasterInfo);

    new CreatingGroupElements("Loggin", "text");
    new CreatingGroupElements("Password", "password");

    htmlElementss.formLogin.appendChild(htmlElementss.formButton);
    htmlElementss.formButton.addEventListener("click", onButtonCheckPassword);
  }

  createElement();

  function onButtonCheckPassword() {
    const loginName = document.getElementById("exampleInputLoggin");
    const pasword = document.getElementById("exampleInputPassword");

    loginName.classList.remove("border-danger", "border-success");
    pasword.classList.remove("border-danger", "border-success");

  

    masterArray.forEach(function(item) {
      if (pasword.value === item.pasword && loginName.value === item.login) {
        masterNameCategogy = `Master : ${item.firstName} ${
          item.LastName
        }. Category: ${item.category}`;
        isLogged = true;
        masterBook = item.book;
        return isLogged, masterBook;
      }
    });
    if (isLogged) {
      loginName.classList.remove("border-danger");
      pasword.classList.remove("border-danger");
      loginName.classList.add("border-success");
      pasword.classList.add("border-success");
      htmlElementss.divMasterInfo.classList.add("hidden");
      htmlElementss.output.classList.remove("hidden");
      htmlElementss.divMasterInToBook.classList.remove("hidden");
      new Book();
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
