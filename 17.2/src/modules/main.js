
function Processor(){}
//создание Processor, создание обьекта 7 на основе базового объекта 5, 
//свойство __proto__ объекта 7 указывает на объект 5,
//Processor.prototype указывает на объект 7, свойство 
//constructor объекта 7 указывает на Processor.prototype.

Processor.prototype = Object.create(Computer.prototype);
//создание обьект 3, свойство __proto__ указывает на обьекта 3 указывает на обьект 4,
//Processor.prototype теперь указывает на объект 3, а не на объект 7.

Processor.prototype.constructor = Processor;
//свойство constructor обьекта 3 указывает на Processor.

function MicroChip(){}
//создание MicroChip, на основе объекта 5.
//свойство __proto__ объекта 6 указывает на объект 5
//MicroChip.prototype указывает на обьект 6
//constructor объекта 6 указывает на MicroChip.

MicroChip.prototype = Object.create(Processor.prototype);
//создание объект 2, свойство __proto__ обьекта 2 указывает на обьект 3.
//MicroChip.prototype больше не указывает на обьект 6, тереь указывает на обьект 2.


MicroChip.prototype.constructor = MicroChip;
//свойство constructor обьекта 2 указывает на MicroChip

const microChip = new MicroChip(); //создание обьект 1 на основании обьекта 2, 
//константа microChip указывает на обьект 1.
//__proto__ объекта 1 указывает на объект 2

function Computer(){}
//создание объекта 4 (контструктора родительского елемента), __proto__ объекта 4 указывает на объект 5, 
//constructor объекта 4  указывает на Computer, Computer.prototype указывает на объект 4 
//свойство __proto__ объекта 5 указывает на null, свойство __proto__ объекта 4
// указывает на объекта 5
//constructor объекта 5 указывает на Object, Object.prototype указывает на объект 5

console.log(microChip);

console.dir(Function);
console.log(Function.prototype);
console.log(Function.__proto__);
//свойство __proto__ конструктора microChip указывает на Function.prototype
// Объекты Function наследуются от Function.prototype 
//поэтому выражение ниже true так как указывают на один и тот же объект
console.log(Function.__proto__ === Function.prototype);


