let htmlElements;
let items = [{
    color: 'white',
    bgColor: 'blue'
  },
  {
    color: 'black',
    bgColor: 'yellow',
    selected: true,
  },
  {
    color: 'green',
    bgColor: 'whitesmoke',

  }
];

function init() {
  htmlElements = {
    bgColorInput: document.querySelector('input.bg-color-input'),
    textColorInput: document.querySelector('input.text-color-input'),
    addButton: document.querySelector('button.add-button'),
    items: document.querySelector('div.items'),
    heloWorldText: document.querySelector('div.hello-world'),
  };

  render();

  htmlElements.body = document.body;
  htmlElements.item = document.querySelector('div.item');
  htmlElements.addButton.addEventListener('click', addButtonValue);
  htmlElements.bgColorInput.addEventListener('focusout', function () {
    colorFucusOut(this)
  });
  htmlElements.textColorInput.addEventListener('focusout', function () {
    colorFucusOut(this)
  });
}

init();

function divColor(color, bgColor) {
  let newDeleteButton = document.createElement('button');
  newDeleteButton.classList.add("delete-button");
  newDeleteButton.color = color;
  newDeleteButton.innerText = 'X';
  newDeleteButton.addEventListener('click', deletteButtonCkicked);

  let newItemText = document.createElement('span');
  newItemText.classList.add('item-text');
  newItemText.innerText = color;
  newItemText.style.color = color;

  let newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.style.backgroundColor = bgColor;
  newItem.addEventListener('click', newItemClicked);

  newItem.appendChild(newItemText);
  newItem.appendChild(newDeleteButton);
  htmlElements.items.appendChild(newItem);
}

function render() {
  if (htmlElements.items.childNodes.length) {
    htmlElements.items.innerHTML = null;
  }
  for (let i = 0; i < items.length; i++) {
    divColor(items[i].color, items[i].bgColor);
  }
  addBorder();
  addBgColor();
}

function newItemClicked() {
  for (let i = 0; i < items.length; i++) {
    items[i].selected = false;
  }
  const newItem = this.parentElement;
  const elementCollection = newItem.childNodes;
  const newItemArray = Array.from(elementCollection);
  let index = newItemArray.indexOf(this);
  items[index].selected = true;
  render();
  addBgColor();
}

function resset() {
  htmlElements.bgColorInput.value = '';
  htmlElements.textColorInput.value = '';
}

function deletteButtonCkicked(evt) {
  evt.stopPropagation();
  let item = this.parentElement;
  const itemElement = item.parentElement;
  const itemArray = Array.from(itemElement.querySelectorAll('div.item'));
  let index = itemArray.indexOf(item);
  items.splice(index, 1);
  render();
}


/* items.forEach(obj => { obj.selected = false }); цикл в одну строчку*/
function addBorder() {
  let item = document.querySelector('div.items');
  const itemArray = Array.from(item.querySelectorAll('div.item'));
  for (let i = 0; i < items.length; i++) {
    if (items[i].selected === true) {
      index = items.indexOf(items[i]);
      for (let i = 0; i < itemArray.length; i++) {
        itemArray[index].classList.add('selected');
          if(items[i].selected && itemArray[index].style.backgroundColor === 'black'){
            itemArray[index].style.border = 'ridge';
          }
      }
    } else {
      itemArray[i].classList.remove('selected');
    }
  }
}

function addBgColor() {
  let item = document.querySelector('div.items');
  const itemArray = Array.from(item.querySelectorAll('div.item'));
  for (let i = 0; i < items.length; i++) {
    if (items[i].selected === true) {
      index = items.indexOf(items[i]);
      for (let i = 0; i < itemArray.length; i++) {
        document.body.style.backgroundColor = items[index].bgColor;
        document.querySelector('div.hello-world').style.color = items[index].color;
      }
    }
  }
}

function checkIfColorCanBeAdded(color) {
  if (color.indexOf('rgb') > -1 || color === '') {
    return false;
  }
  let div = document.createElement('div');
  div.style.backgroundColor = color;
  return div.style.backgroundColor === color;
}


function colorFucusOut(input) {
  if (checkIfColorCanBeAdded(input.value) === true) {
    input.style.borderColor = 'green';
  } else {
    input.style.borderColor = 'red';
  }
}

function checkIfColorAdded(color, bgColor){
  let contains = false;
  for (let i = 0; i < items.length; i++){ 
    const currentIten = items[i];
    if(currentIten.color === color && currentIten.bgColor === bgColor) {
      contains = true;
    }
  }
  return contains;
}

function addButtonValue() {
    let inpTextColor = htmlElements.textColorInput.value;
    let inputBgColor =  htmlElements.bgColorInput.value;
    let checkBgColor = checkIfColorCanBeAdded(inputBgColor);
    let checkTextColor = checkIfColorCanBeAdded(inpTextColor);
    if (checkTextColor === true && checkBgColor === true) {
      if(checkIfColorAdded(inpTextColor, inputBgColor) === false){
        items.push({color:inpTextColor, bgColor:inputBgColor});
        render();
        resset();  
      }else{
        htmlElements.textColorInput.style.borderColor = 'red';
        htmlElements.bgColorInput.style.borderColor = 'red';
    }
    } else{
        colorFucusOut(htmlElements.bgColorInput);
        colorFucusOut(htmlElements.textColorInput);
  }
}