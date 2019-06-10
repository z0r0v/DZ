let buttonArray = [];

function copyResultingObject(button) {
  const objectCopied = {};
  if (buttonArray.indexOf(button) > -1) {
    return 'ATTENTION! Cyclic link!';
  }

  buttonArray.push(button);

  if (
    typeof button === undefined ||
    button === null ||
    typeof button !== "object"
  ) {
    return button;
  }

  for (let key in button) {
    if (typeof button[key] === 'object') {
      const checkProperty = copyResultingObject(button[key]);
      objectCopied[key] = checkProperty;
    } else {
      objectCopied[key] = button[key];
    }
  }

  return objectCopied;
}

const myButton = {
  property: {
    width: 250,
    height: 150,
    color: "white",
    backgroundColor: "green",
    fontSize: 16,
  },
  howManyButtons: 2,

  showWidthButton() {
    console.log(`Width button: ${this.property.width}px;`);
  },
  showLengthButtons() {
    const Length2Buttons = this.property.width * this.howManyButtons;
    console.log(`length of 2 buttons: ${Length2Buttons}px;`);
  }
};

// Проверка на циклическую ссылку
myButton.add = myButton; 
const newButton = copyResultingObject(myButton);
myButton.showWidthButton();
newButton.showWidthButton();
//Проверка изменения свойства на новом обьекте свойства
newButton.color = 'silver'; 
myButton.showLengthButtons();
newButton.showLengthButtons();

console.log(newButton);
