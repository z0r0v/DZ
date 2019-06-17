
function Processor(){}
//создание Processor, создание обьекта 7 на основе базового объекта 5, свойство __proto__ объекта 7 указывает на объект 5,
//Processor.prototype указывает на объект 7, свойство constructor объекта 7 указывает на Processor.prototype.

Processor.prototype = Object.create(Computer.prototype);
//создание обьект 3, свойство __proto__ указывает на обьекта 3 указывает на обьект 4,
//Processor.prototype теперь указывает на объект 3, а не на объект 7.

Processor.prototype.constructor = Processor;
//свойство constructor обьекта 3 указывает на Processor.

function MicroChip(){}
//создание MicroChip(объект 6), на основе объекта 5.
//свойство __proto__ объекта 6 указывает на объект 5

MicroChip.prototype = Object.create(Processor.prototype);
//создание объект 2, свойство __proto__ обьекта 2 указывает на обьект 3.
//MicroChip.prototype больше не указывает на обьект 6, тереь указывает на обьект 2.


MicroChip.prototype.constructor = MicroChip;
//свойство constructor обьекта 2 указывает на MicroChip

const microChip = new MicroChip; //создание обьект 1 на основании обьекта 2, 
//константа microChip указывает на обьект 1.

function Computer(){}
//создание контструктора родительского елемента, __proto__ указывает на объект 5, constructor указывает на Object

console.log(microChip);
