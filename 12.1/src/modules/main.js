let arr = [];

function objectCopy(object) {
    debugger;
  if (arr.indexOf(object) > -1) {
    return 'circular reference is detected';
  }

  arr.push(object);

  const clon = {};

  if (object === null || typeof object !== 'object' || typeof object === undefined) {
    return object;
  }

  for (let key in object) {
    if (typeof object[key] === 'object') {
      clon[key] = objectCopy(object[key]);
    } else {
      clon[key] = object[key];
    }
  }

  return clon;
}

const obj = {
  size: 123,
  coords: {
    x: 1,
    y: {
      value: 111,
      direction: 'top'
    },
    showDirection() {
      console.log(`coords: ${this.y.direction}`);
    }
  },
  showSize() {
    console.log(`size: ${this.size}`);
  }
};

//obj.size = obj;

const obj2 = objectCopy(obj);
obj2.coords.y.direction = 'bottom';
// obj2.size = '234';
obj.showSize();
obj2.showSize();
obj.coords.showDirection();
obj2.coords.showDirection();

console.log(obj2);
console.log(arr);
