function Masterbooking(){
  
  const htmlElements = {
    container:document.querySelector(".container"),
    tabs:document.querySelector(".tabs"),
  }

  function creatElement(){

    htmlElements.divMasterInToBook = document.createElement('div');
    htmlElements.divMasterInToBook.classList.add("shadow-sm", "p-3", "mb-5", "bg-white", "rounded","col-6","offset-3");
    htmlElements.divMasterInToBook.dataMode = "masterInToBook";

    htmlElements.h2MasterInToBook = document.createElement('h2');
    htmlElements.h2MasterInToBook.innerText = "Master In To Book";

    htmlElements.form = document.createElement('form');

    htmlElements.buttonToBook = document.createElement('button');
    htmlElements.buttonToBook.type = "Submit";
    htmlElements.buttonToBook.classList.add("btn", "btn-primary");
    htmlElements.buttonToBook.innerText = "to Book";


    function CreatingGroupElements(value, innerText){
      htmlElements.divFormGroup = document.createElement('div');
      htmlElements.divFormGroup.classList.add("form-group");
  
      htmlElements.labelFormGroup = document.createElement('label');
      htmlElements.labelFormGroup.htmlFor = `formGroupExampleInput${value}`;
      htmlElements.labelFormGroup.innerText = innerText;
  
      htmlElements.inputFormGroup = document.createElement('input');
      htmlElements.inputFormGroup.type = "text";
      htmlElements.inputFormGroup.classList.add("form-control");
      htmlElements.inputFormGroup.id = `formGroupExampleInput${value}`;
      htmlElements.inputFormGroup.placeholder = `Enter ${innerText.toLowerCase()}`;

      htmlElements.divFormGroup.appendChild(htmlElements.labelFormGroup);
      htmlElements.divFormGroup.appendChild(htmlElements.inputFormGroup);
      htmlElements.form.appendChild(htmlElements.divFormGroup);
    }

    const divGruup1 = new CreatingGroupElements(1, "Owner name");
    const divGruup2 = new CreatingGroupElements(2, "Register sign");
    const divGruup3 = new CreatingGroupElements(4, "Owner's phone number");
    const divGruup4 = new CreatingGroupElements(5, "Car mileage");
    const divGruup5 = new CreatingGroupElements(4, "Car brand");
    const divGruup6 = new CreatingGroupElements(6, "Book time");
    const divGruup7 = new CreatingGroupElements(7, "Type of work performed");

    


    htmlElements.tabs.appendChild(htmlElements.divMasterInToBook);
    htmlElements.divMasterInToBook.appendChild(htmlElements.h2MasterInToBook);
    htmlElements.divMasterInToBook.appendChild(htmlElements.form);
    htmlElements.form.appendChild(htmlElements.buttonToBook);

    
    
  }
  creatElement();
}


export {Masterbooking};