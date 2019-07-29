import {UserService} from "./user.service.js";


class Master {
  id;
  login;
  pasword;
  firstName;
  lastName;
  dateEmployment;
  categoryHired;
  book;
  category = ()=> {
    const yers = Math.floor((Date.now() - this.dateEmployment) / 31536000000);
    const preliminaryCategory = this.categoryHired + yers;
    if (preliminaryCategory >= 5) {
      return 5;
    } else {
      return preliminaryCategory;
    }
  };
};

class Masters {
  masters = [];
  getById(id) {
    let result = null;
    this.masters.forEach(function(master) {
      if (master.id === id) {
        result = master;
        return;
      }
    });
    return result;
  };
};

const masters = new Masters();

new UserService().getFetch().then(data=>{
  const master1 = new Master();
  master1.id = data.id;
  master1.login = data.login;//Изменить на не пустое
  master1.pasword = data.pasword;//Изменить на не пустое
  master1.firstName = data.firstName;
  master1.lastName = data.lastName;
  master1.dateEmployment =new Date(data.dateEmployment);
  master1.categoryHired =data.categoryHired;
  masters.masters.push(master1);
  console.log("master1:", master1);
  console.log("data:", data);
});

new UserService().getHXMhttp().then(data=>{
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const master2 = new Master();
  master2.id = 2;
  master2.login = "b";
  master2.pasword = "321";
  master2.firstName = "Genady";
  master2.lastName = "Petrovich";
  master2.dateEmployment = new Date("July 18, 2016 14:24:00");
  master2.categoryHired =2;
  masters.masters.push(master2);
  console.log("master2:", master2);
  console.log("data:", data);
});








//тут будем забирать мастеров из json








export { masters };

