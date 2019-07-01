function Masterbooking(){
  
  const htmlElement = {
    container:document.querySelector(".container"),
    tabs:document.querySelector(".tabs"),
  }

  function creatElement(){

    htmlElement.divMasterInToBook = document.createElement('div');
    htmlElement.divMasterInToBook.classList.add("shadow-sm", "p-3", "mb-5", "bg-white", "rounded","col-6","offset-3");
    htmlElement.divMasterInToBook.dataMode = "masterInToBook";

    htmlElement.h2MasterInToBook = document.createElement('h2');
    htmlElement.h2MasterInToBook.innerText = "Master In To Book";

    htmlElement.form = document.createElement('form');

    htmlElement.buttonToBook = document.createElement('button');
    htmlElement.buttonToBook.type = "Submit";
    htmlElement.buttonToBook.classList.add("btn", "btn-primary");
    htmlElement.buttonToBook.innerText = "to Book";


    function CreatingGroupElements(value, innerText){
      htmlElement.divFormGroup = document.createElement('div');
      htmlElement.divFormGroup.classList.add("form-group");
  
      htmlElement.labelFormGroup = document.createElement('label');
      htmlElement.labelFormGroup.htmlFor = `formGroupExampleInput${value}`;
      htmlElement.labelFormGroup.innerText = innerText;
  
      htmlElement.inputFormGroup = document.createElement('input');
      htmlElement.inputFormGroup.type = "text";
      htmlElement.inputFormGroup.classList.add("form-control");
      htmlElement.inputFormGroup.id = `formGroupExampleInput${value}`;
      htmlElement.inputFormGroup.placeholder = `Enter ${innerText.toLowerCase()}`;

      htmlElement.divFormGroup.appendChild(htmlElement.labelFormGroup);
      htmlElement.divFormGroup.appendChild(htmlElement.inputFormGroup);
      htmlElement.form.appendChild(htmlElement.divFormGroup);
    }

    const divGruup1 = new CreatingGroupElements(1, "Owner name");
    const divGruup2 = new CreatingGroupElements(2, "Register sign");
    const divGruup3 = new CreatingGroupElements(3, "Owner's phone number");
    const divGruup4 = new CreatingGroupElements(4, "Car mileage");
    const divGruup5 = new CreatingGroupElements(5, "Car brand");
    const divGruup6 = new CreatingGroupElements(6, "Book time");
    const divGruup7 = new CreatingGroupElements(7, "Type of work performed");

    htmlElement.tabs.appendChild(htmlElement.divMasterInToBook);
    htmlElement.divMasterInToBook.appendChild(htmlElement.h2MasterInToBook);
    htmlElement.divMasterInToBook.appendChild(htmlElement.form);
    htmlElement.form.appendChild(htmlElement.buttonToBook);

    
    
  }
  creatElement();
}


export {Masterbooking};