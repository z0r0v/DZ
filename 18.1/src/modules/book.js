const array1 = [
  {
    ownerName: "Vasiliy Petrovich",
    registerSign: "7785AA-4",
    ownerPhoneNumber: "+375293767082",
    carMileage: 222000,
    carBrand: "Volvo",
    bookTime: new Date().getTime()
  }
];

function Book() {
  const htmlElements = {
    container: document.querySelector(".container"),
    tabs: document.querySelector(".tabs")
  };

  function creatElement() {
    htmlElements.output = document.createElement("div");
    htmlElements.output.classList.add("output");

    htmlElements.h2MasterInfo = document.createElement("h2");
    htmlElements.h2MasterInfo.innerText = `Vasily Ksin. Сategory 5`;

    htmlElements.bookTable = document.createElement("table");
    htmlElements.output.classList.add("table");

      htmlElements.thead = document.createElement("thead");
      htmlElements.tr = document.createElement("tr");
      htmlElements.th = document.createElement("th");
      htmlElements.th.scope = "col";
      // тут элементы должны быть заветрсаны жестко с привязкой

    function creatthead() {
      
      // тут элементы отрисовки из масива
    }
  }
}
export { Book };
