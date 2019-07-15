import { bookArrayKshishtykov } from "./carDatabase.js";
import { bookArrayPetrovich } from "./carDatabase.js";


const masterArray = [
  {
    login: "a",
    pasword: "123",
    firstName: "Vasiliy",
    LastName: "Kshishtykov",
    dateEmployment: new Date("February 22, 2017 14:24:00"),
    categoryHired: 1,
    book: bookArrayKshishtykov,
    get category() {
      const yers = Math.floor(
        (Date.now() - this.dateEmployment) / 31536000000
      );
  
      const preliminaryCategory = this.categoryHired + yers;
      if (preliminaryCategory >= 5) {
        return 5;
      } else {
        return preliminaryCategory;
      }
    }
  },
  {
    login: "b",
    pasword: "321",
    firstName: "Genady",
    LastName: "Petrovich",
    dateEmployment: new Date("July 18, 2016 14:24:00"),
    get workExperience() {
      return this.dateEmployment - new Date().getDate();
    },
    categoryHired: 2,
    book: bookArrayPetrovich,
    get category() {
      const yers = Math.floor(
        (Date.now() - this.dateEmployment) / 31536000000
      );
      const preliminaryCategory = this.categoryHired + yers;
      if (preliminaryCategory >= 5) {
        return 5;
      } else {
        return preliminaryCategory;
      }
    }
  }
];

export { masterArray };
