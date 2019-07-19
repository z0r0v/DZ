const bookArrayKshishtykov = [
  {
    time: "16:00",
    brand: "Lada",
    phone: "+375293767082",
    name: "Vasiliy Petrovich",
    work: "Еiming belt replacement",
    registerSign: "7785AA-4",
    carMileage: 222000,
    yearIssue: new Date("2017").getFullYear(),
    priceWork: 10,
    priceParts: 10
  },
  {
    time: "16:00",
    brand: "Lada",
    phone: "+375293767082",
    name: "Vasiliy Petrovich",
    work: "Еiming belt replacement",
    registerSign: "7785AA-4",
    carMileage: 222000,
    yearIssue: new Date("2017").getFullYear(),
    priceWork: 10,
    priceParts: 10
  },
  {
    time: "16:00",
    brand: "Lada",
    phone: "+375293767082",
    name: "Vasiliy Petrovich",
    work: "Еiming belt replacement",
    registerSign: "7785AA-4",
    carMileage: 222000,
    yearIssue: new Date("2017").getFullYear(),
    priceWork: 10,
    priceParts: 10
  }
];

const bookArrayPetrovich = [
  {
    time: "16:00",
    brand: "BMW",
    phone: "+375293767082",
    name: "Vasiliy Petrovich",
    work: "Еiming belt replacement",
    registerSign: "7785AA-4",
    carMileage: 222000,
    yearIssue: new Date("2017").getFullYear(),
    priceWork: 10,
    priceParts: 10
  },
  {
    time: "16:00",
    brand: "BMW",
    phone: "+375293767082",
    name: "Vasiliy Petrovich",
    work: "Еiming belt replacement",
    registerSign: "7785AA-4",
    carMileage: 222000,
    yearIssue: new Date("2017").getFullYear(),
    priceWork: 10,
    priceParts: 10
  },
  {
    time: "16:00",
    brand: "BMW",
    phone: "+375293767082",
    name: "Vasiliy Petrovich",
    work: "Еiming belt replacement",
    registerSign: "7785AA-4",
    carMileage: 222000,
    yearIssue: new Date("2017").getFullYear(),
    priceWork: 10,
    priceParts: 10
  }
];

const carOwners = [
  {
    name: "Vasiliy Petrovich",
    phone: "+375293767082",
    car: {
      brand: "BMW",
      carMileage: 210000,
      registerSign: "7785AA-4",
      replacementParts: [
        {
          masterName: "Kshishtykov",
          replacementMileage: 105000,
          data: new Date("December 01, 2016").toLocaleString().split(",")[0],
          work: "Thrust Tip Replacement",
          nextReplacementMileage: 200000,
          priceWork: 20,
          priceParts: 35
        },
        {
          masterName: "Kshishtykov",
          replacementMileage: 120000,
          data: new Date("December 10, 2017").toLocaleString().split(",")[0],
          work: "Needle shaft replacement",
          nextReplacementMileage: 200000,
          priceWork: 150,
          priceParts: 200
        },
        {
          masterName: "Kshishtykov",
          replacementMileage: 140000,
          data: new Date("December 16, 2018").toLocaleString().split(",")[0],
          work: "Clutch replacement",
          nextReplacementMileage: 250000,
          priceWork: 150,
          priceParts: 800
        }
      ]
    }
  }
];

export { bookArrayKshishtykov, bookArrayPetrovich, carOwners };
