import { UserServiceFetch, UserServiceHXMhttp } from "../reexport.js";
class CarsOwners {
  carsOwners = [];
};

class carOwn {
  name;
  phone;
  car = [];
};

class Car {
  brand;
  carMileage;
  registerSign;
  replacementParts = [];
  futureWorkPlan = [];
};

class ReplacementParts {
  masterName;
  replacementMileage;
  data;
  work;
  nextReplacementMileage;
  priceWork;
  priceParts;
};

class FutureWork {
  carMileage;
  masterName;
  replacementMileage;
  work;
  nextReplacementMileage;
  get checkMileageCompare() {
    return this.carMileage >= this.nextReplacementMileage;
  }
  priceWork;
  priceParts;
};


class CarsOwnersCeate {
  constructor(data) {
    data.forEach(element => {

      const own = new carOwn();
      carsOwners.carsOwners.push(own);
      own.name = element.name;
      own.phone = element.phone;

      element.car.forEach(element => {
        const ownCar = new Car();
        ownCar.brand = element.brand;
        ownCar.carMileage = element.carMileage;
        ownCar.registerSign = element.registerSign;
        own.car.push(ownCar);

        element.replacementParts.forEach(element => {
          const newReplacement = new ReplacementParts();
          newReplacement.masterName = element.masterName;
          newReplacement.replacementMileage = element.replacementMileage;
          newReplacement.data = element.data;
          newReplacement.work = element.work;
          newReplacement.nextReplacementMileage =
            element.nextReplacementMileage;
          newReplacement.priceWork = element.priceWork;
          newReplacement.priceParts = element.priceParts;
          ownCar.replacementParts.push(newReplacement);
        });

        element.futureWorkPlan.forEach(element => {
          const futureWork = new FutureWork();
          futureWork.carMileage = element.carMileage;
          futureWork.masterName = element.masterName;
          futureWork.replacementMileage = element.replacementMileage;
          futureWork.work = element.work;
          futureWork.nextReplacementMileage = element.nextReplacementMileage;
          futureWork.priceWork = element.priceWork;
          futureWork.priceParts = element.priceParts;
          ownCar.futureWorkPlan.push(futureWork);
        });
      });
  
    });
  };
};


const carsOwners = new CarsOwners();

const url = "https://my-server-dz25.herokuapp.com/carsOwners";

new UserServiceFetch().getFetch(url).then(data => {
  new CarsOwnersCeate(data);
  console.log(carsOwners.carsOwners[0]);
});

console.log(carsOwners.carsOwners[0]);


// console.log(carsOwners);

// const petrovich = new carOwn();
// carsOwners.carsOwners.push(petrovich);

// petrovich.name = "Vasiliy Petrovich";
// petrovich.phone = "+375293767082";

// const petrovichCar = new Car();
// petrovich.car.push(petrovichCar);
// petrovichCar.brand = "BMW";
// petrovichCar.carMileage = 210000;
// petrovichCar.registerSign = "7785AA-4";

// const newReplacement = new ReplacementParts();
// petrovichCar.replacementParts.push(newReplacement);
// newReplacement.masterName = "Kshishtykov";
// newReplacement.replacementMileage = 105000;
// newReplacement.data = new Date("December 01, 2016").toLocaleString().split(",")[0];
// newReplacement.work = "Thrust Tip Replacement";
// newReplacement.nextReplacementMileage = 200000;
// newReplacement.priceWork = 20;
// newReplacement.priceParts = 35;

// const newReplacement2 = new ReplacementParts();
// petrovichCar.replacementParts.push(newReplacement2);
// newReplacement2.masterName = "Kshishtykov";
// newReplacement2.replacementMileage = 120000;
// newReplacement2.data = new Date("December 10, 2017").toLocaleString().split(",")[0];
// newReplacement2.work = "Needle shaft replacement";
// newReplacement2.nextReplacementMileage = 200000;
// newReplacement2.priceWork = 150;
// newReplacement2.priceParts = 200;

// const newReplacement3 = new ReplacementParts();
// petrovichCar.replacementParts.push(newReplacement3);
// newReplacement3.masterName = "Kshishtykov";
// newReplacement3.replacementMileage = 140000;
// newReplacement3.data = new Date("December 16, 2018").toLocaleString().split(",")[0];
// newReplacement3.work = "Clutch replacement";
// newReplacement3.nextReplacementMileage = 250000;
// newReplacement3.priceWork = 150;
// newReplacement3.priceParts = 800;

// const futureWork = new FutureWork();
// petrovichCar.futureWorkPlan.push(futureWork);
// futureWork.carMileage = 200000;
// futureWork.masterName = "Kshishtykov";
// futureWork.replacementMileage = 105000;
// futureWork.work = "Thrust Tip Replacement";
// futureWork.nextReplacementMileage = 190000;
// futureWork.priceWork = 20;
// futureWork.priceParts = 35;

// const futureWork2 = new FutureWork();
// petrovichCar.futureWorkPlan.push(futureWork2);
// futureWork2.carMileage = 200000;
// futureWork2.masterName = "Kshishtykov";
// futureWork2.replacementMileage = 120000;
// futureWork2.work = "Needle shaft replacement";
// futureWork2.nextReplacementMileage = 195000;
// futureWork2.priceWork = 150;
// futureWork2.priceParts = 200;

// const futureWork3 = new FutureWork();
// petrovichCar.futureWorkPlan.push(futureWork3);
// futureWork3.carMileage = 200000;
// futureWork3.masterName = "Kshishtykov";
// futureWork3.replacementMileage = 140000;
// futureWork3.work = "Thrust Tip Replacement";
// futureWork3.nextReplacementMileage = 250000;
// futureWork3.priceWork = 150;
// futureWork3.priceParts = 800;

// console.log(JSON.stringify(carsOwners));

export { carsOwners };
