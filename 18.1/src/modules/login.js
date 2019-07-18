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
  formButton:document.querySelector("div.col-md-auto.mt-5 > form > input"),
  inputLogin:document.getElementById('exampleInputLoggin'),
  inputPasword:document.getElementById('exampleInputPassword'),
  divMasterInfo:document.querySelector("div.masterInfo.col-sm-12.col-md-12.col-lg-12 > div.col-md-auto.mt-5 > form"),
};


htmlElementss.buttonLogout.addEventListener("click", onLogoutCuttonclick);
htmlElementss.formButton.addEventListener("click", onButtonCheckPassword);

function onLogoutCuttonclick() {
  isLogged = false;
  htmlElementss.divMasterInfo.classList.remove("hidden");
  htmlElementss.output.classList.add("hidden");
  htmlElementss.divMasterInToBook.classList.add("hidden");
  htmlElementss.inputLogin.value = null;
  htmlElementss.inputPasword.value = null;
  htmlElementss.inputLogin.placeholder = "Enter you loggin";
  htmlElementss.inputPasword.placeholder = "Enter you password";

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

function Login() {}

Login.prototype.init = function(){
}



export { Login };
