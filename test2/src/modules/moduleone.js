//задание 1
const array = [1,2,3,4,5,6,7,8,9];

var count = 0;
array.forEach(function(element) {
    count += +element;
    console.log(count);
});



// задание 2
{/* <script type="module" src="../src/modules/main.js"></script> */}

//задание 3
const obj1 = {
    name: 'First Jedi'
};

const obj2 = Object.create(obj1);
obj2.greet = function(){
    console.log(`Hello ${this.name}`);
};

const obj3 = Object.create(obj2);
obj3.name = 'Last Jedi';
obj3.greet();
obj2.greet.bind(obj1)();
// у меня правильно


// Задание 4
class AnimalOne{
    constructor(){
        this.color = 'blue';
        this.run = speed => {
            console.log(`${this.color} animal is running whith the speed of ${speed} km/h`)
            this.run();
        }
    }
}

class RabbitOne extends AnimalOne{}

class WhiteRabbitOne extends RabbitOne {
    constructor(){
        super();
    this.color = 'black';
}
showColor = function(){
    console.log(`my color is ${this.color}`);
};
}

const whiteRabbitOne = new WhiteRabbitOne();
whiteRabbitOne.showColor();
//  в консоли будет y color is black

// Синтаксис es5

function Animal(){
    this.color = 'blue';
    this.run = speed => {
        console.log(`${this.color} animal is running whith the speed of ${speed} km/h`)
        this.run();
    }
}

function Rabbit(){};

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

WhiteRabbit.prototype = Object.create(Rabbit.prototype);
WhiteRabbit.prototype.constructor = WhiteRabbit;

function WhiteRabbit(){
    Rabbit.call(this);
    this.color = 'black';
}

WhiteRabbit.prototype.showColor = function(){
    console.log(`my color is ${this.color}`);}

const whiteRabbit = new WhiteRabbit();
whiteRabbit.showColor();


// задание 5
const interval = 1000;
setTimeout(function(){console.log(`the is interval ${interval}`);}, interval);
// в консоль правильно было

let timerId = setInterval(function() {
    console.log(`the is interval ${interval}`);
}, interval);

setTimeout(function() {
  clearInterval(timerId);
}, interval);