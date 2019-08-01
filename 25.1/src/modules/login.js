import { masters } from "./reexport.js";
import { BooksTable, RenderBook } from "./reexport.js";
import { ClassHelper } from "./reexport.js";

let masterNameCategogy;
let masterId;
let isLogged = false;

const loginName = document.getElementById("exampleInputLoggin");
const pasword = document.getElementById("exampleInputPassword");
const danger = "border-danger";
const success = "border-success";
const incorrectly = "Password or login is entered incorrectly!";
const log = "loggin";
const pass = "password";
const passPlac = "Enter you ";
const hidd = "hidden";

const htmlElements = {
  output: document.querySelector(".output"),
  buttonLogout: document.querySelector(".logOut"),
  divMasterInToBook: document.querySelector(".book"),
  formButton: document.querySelector("div.col-md-auto.mt-5 > form > input"),
  inputLogin: document.getElementById("exampleInputLoggin"),
  inputPasword: document.getElementById("exampleInputPassword"),
  divMasterInfo: document.querySelector("div.col-md-auto.mt-5 > form"),
  divNav: document.querySelector("div.divNav"),
  divLogin: document.querySelector(".login "),
  masterInfo: document.querySelector(".masterInfo"),
  tr: document.querySelector(".executedOrder > tr")
};

htmlElements.buttonLogout.addEventListener("click", onLogoutCuttonclick);
htmlElements.formButton.addEventListener("click", onButtonCheckPassword);

function onLogoutCuttonclick() {
  isLogged = false;
  htmlElements.divLogin.classList.remove(hidd);
  new ClassHelper().addClass([htmlElements.masterInfo, htmlElements.divNav], hidd);
  new ClassHelper().addNullValue([htmlElements.inputLogin,  htmlElements.inputPasword]);
  htmlElements.inputLogin.placeholder = `${passPlac}${log}`;
  htmlElements.inputPasword.placeholder = `${passPlac}${pass}`;
  htmlElements.tr.innerText = null;
};


class ValidRender{
  constructor(isLogged, masterNameCategogy, masterId){
    if (isLogged) {
      new BooksTable(masterNameCategogy, masterId);
      new ClassHelper().removeClass([loginName, pasword], danger);
      new ClassHelper().addClass([loginName, pasword, htmlElements.divLogin], hidd);
      new ClassHelper().removeClass([htmlElements.masterInfo, htmlElements.divNav], hidd);
    }else{
      new ClassHelper().addClass([loginName, pasword], danger, "border");
      new ClassHelper().addNullValue([loginName, pasword]);
      loginName.placeholder = incorrectly;
      pasword.placeholder = incorrectly;
    };
  };
};

class Authentication{
  constructor(){
    masters.masters.forEach(function(master) {
      if (pasword.value === master.pasword && loginName.value === master.login) {
        masterNameCategogy = `Master : ${master.firstName} ${
          master.lastName}. Category: ${master.category()}`;
        isLogged = true;
        masterId = master.id
        return isLogged, masterId;
      };
    });
  };
};

function onButtonCheckPassword() {
  new ClassHelper().removeClass([loginName, pasword], danger, success);
  new Authentication();
  new ValidRender(isLogged, masterNameCategogy, masterId);
  localStorage.setItem("stateMasterNameCategogy", masterNameCategogy);
  localStorage.setItem("stateLogIn", isLogged);
  localStorage.setItem("stateMaster", masterId);
  return masterNameCategogy;
};


isLogged = localStorage.getItem("stateLogIn", isLogged);
masterId = localStorage.getItem("stateMaster", masterId);
masterNameCategogy = localStorage.getItem("stateMasterNameCategogy", masterNameCategogy);


class Relog{
  constructor(isLogged, masterNameCategogy, masterId){
  console.log("masterNameCategogy in Relog:", masterNameCategogy);
  console.log("isLogged in Relog:",isLogged);
  console.log("masterId in Relog:",masterId);
  // debugger;
    isLogged ? new ValidRender(isLogged, masterNameCategogy, masterId):"";
    return isLogged, masterId;
  };
};

new Relog(isLogged, masterNameCategogy, masterId);



function Login() {}

export { Login };
