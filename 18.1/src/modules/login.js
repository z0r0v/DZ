import { masterArray } from "./materDataBase.js";
import { Book } from "./book.js";

export let masterNameCategogy;
export let masterBook;
let isLogged = false;

const htmlElements = {
  output: document.querySelector(".output"),
  buttonLogout: document.querySelector(".masterInfo>.output>.row>input"),
  divMasterInToBook:document.querySelector("div.shadow-sm.p-3.mb-5.bg-white.rounded.col-6.offset-3.mt-5"),
  formButton:document.querySelector("div.col-md-auto.mt-5 > form > input"),
  inputLogin:document.getElementById('exampleInputLoggin'),
  inputPasword:document.getElementById('exampleInputPassword'),
  divMasterInfo:document.querySelector("div.col-md-auto.mt-5 > form"),
  divNav:document.querySelector(".divNav"),
};


htmlElements.buttonLogout.addEventListener("click", onLogoutCuttonclick);
htmlElements.formButton.addEventListener("click", onButtonCheckPassword);

function onLogoutCuttonclick() {
  isLogged = false;
  htmlElements.divMasterInfo.classList.remove("hidden");
  htmlElements.output.classList.add("hidden");
  htmlElements.divMasterInToBook.classList.add("hidden");
  htmlElements.inputLogin.value = null;
  htmlElements.inputPasword.value = null;
  htmlElements.inputLogin.placeholder = "Enter you loggin";
  htmlElements.inputPasword.placeholder = "Enter you password";

}

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
    htmlElements.divMasterInfo.classList.add("hidden");
    htmlElements.output.classList.remove("hidden");
    htmlElements.divMasterInToBook.classList.remove("hidden");
    htmlElements.divNav.classList.remove("hidden");

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



function Login() {}

Login.prototype.init = function(){
}



export { Login };
