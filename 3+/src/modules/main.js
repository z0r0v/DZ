
const htmlElements = {};

function initHTMLElements() {
  htmlElements.h1 = document.querySelector('h1');
  htmlElements.span = document.querySelector('span');
  htmlElements.body = document.body;
  htmlElements.img = document.querySelector('img');
  htmlElements.imgJs = document.querySelector('img.js');
  htmlElements.p = document.querySelector('p');
}

function initEvenHandles() {
    htmlElements.h1.addEventListener('click', matFunction);
}

initHTMLElements();
initEvenHandles();

/*Функция выдающая рандомные значения из масива*/
let myArray = ["Pink", "LightPink", "HotPink", "DeepPink","MediumVioletRed", "PaleVioletRed"];
function getRandomValue(arr, max) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function getUniqueRandomValue(arr, currentValue) {
    let randomNumber;
    do {
        randomNumber = getRandomValue(arr, arr.length);
    } while (randomNumber === currentValue);
    return randomNumber;
}
let currentValue;

function matFunction() {
    currentValue = getUniqueRandomValue(myArray, currentValue);

    /*color from className*/
    /*htmlElements.body.className = currentValue;*/

    /*color from var(--color)*/
    htmlElements.body.style.setProperty('--color', currentValue);

    function textColorSnapColorCheimg() {
        htmlElements.span.style.color = "white";
        htmlElements.img.src = "http://svdsecurity.by/alexFiles/logo/logoZhorovWhite.png";
        htmlElements.p.style.color = "white";
        /*добавляю цвет в боди*/
    }
    textColorSnapColorCheimg();

    switch (currentValue) {
        case "Pink":
            htmlElements.span.innerHTML = "Java Script has a development trend!";
            htmlElements.imgJs.src ="http://svdsecurity.by/alexFiles/img/js.png";
            break;
        case "LightPink":
            htmlElements.span.innerHTML = "JavaScript сompiles and interpreted in many programming languages!";
            htmlElements.imgJs.src ="https://www.moltin.com/hubfs/js-cube.svg";
            break;
        case "HotPink":
            htmlElements.span.innerHTML = "Available on all devices and browsers!";
            htmlElements.imgJs.src ="http://svdsecurity.by/alexFiles/img/js.png";
            break;
        case "DeepPink":
            htmlElements.span.innerHTML = "Has the ability to immediately see the result and manage multimedia space!";
            htmlElements.imgJs.src ="https://www.moltin.com/hubfs/js-cube.svg";
            break;
        case "MediumVioletRed":
            htmlElements.span.innerHTML = "The demand for javascript programmers increases by 30% per year!";
            break;
        case "PaleVioletRed":
            htmlElements.span.innerHTML = "On tut.by: experts of foreign economic activity 3 pages, and on a JavaScript programmer 15 pages!";
            htmlElements.imgJs.src ="https://www.moltin.com/hubfs/js-cube.svg";
            break;
    }
}
