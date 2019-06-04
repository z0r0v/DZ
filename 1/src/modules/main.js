/*Валидация123*/
function valueInp() {
    let isValid;
    if (!isNaN(parseInt(document.getElementById('incomingDataFirstField').value))) {
        isValid = true;
    } else {
        alert('Enter the number correctly');
        isValid = false;
    }
    return isValid;
}

/*Reduce the entry of input values into the object*/
let incomingDataFirstField = document.getElementById('incomingDataFirstField');
let incomingDataSecondField = document.getElementById('incomingDataSecondField');

/*Variable in array then array can be called in function*/
let newTextValue = function(){
    let textValue1 = incomingDataFirstField.value;
    let textValue2 = incomingDataSecondField.value;
    return[textValue1, textValue2];
};

/*Functions of the result buttons" + - * / " №1 Calculete*/
function calculate(operation) {
    if (valueInp()) {
        let textValue = newTextValue();
        switch (operation) {
            case "+":
                incomingDataFirstField.value = parseInt(textValue[0]) + parseInt(textValue[1]);
                break;
            case "-":
                incomingDataFirstField.value = parseInt(textValue[0]) - parseInt(textValue[1]);
                break;
            case "*":
                incomingDataFirstField.value = parseInt(textValue[0]) * parseInt(textValue[1]);
                break;
            case "/":
                incomingDataFirstField.value = (parseInt(textValue[0]) / parseInt(textValue[1])).toFixed(2);
                break;
        }
    }
}

/*The buttons for the first column are collected following the example in the stack*/
function myFunction(value) {
    incomingDataFirstField.value += value;
}


let mBa = document.getElementById('mBa');
let mBb = document.getElementById('mBb');
let mBc = document.getElementById('mBc');
let mBd = document.getElementById('mBd');
mBa.addEventListener('click', function () {calculate('+')});
mBb.addEventListener('click', function () {calculate('-')});
mBc.addEventListener('click', function () {calculate('/')});
mBd.addEventListener('click', function () {calculate('*')});


let mBe = document.getElementById('mBe');
let mBf = document.getElementById('mBf');
let mBg = document.getElementById('mBg');
let mBh = document.getElementById('mBh');
let mBi = document.getElementById('mBi');
let mBj = document.getElementById('mBj');
let mBk = document.getElementById('mBk');
let mBl = document.getElementById('mBl');
let mBm = document.getElementById('mBm');
mBe.addEventListener('click', function () {myFunction('1')});
mBf.addEventListener('click', function () {myFunction('2')});
mBg.addEventListener('click', function () {myFunction('3')});
mBh.addEventListener('click', function () {myFunction('4')});
mBi.addEventListener('click', function () {myFunction('5')});
mBj.addEventListener('click', function () {myFunction('6')});
mBk.addEventListener('click', function () {myFunction('7')});
mBl.addEventListener('click', function () {myFunction('8')});
mBm.addEventListener('click', function () {myFunction('9')});

