import { UserService } from "./user.service.js";

class Master {
  id;
  login;
  pasword;
  firstName;
  lastName;
  dateEmployment;
  categoryHired;
  category = () => {
    const yers = Math.floor((Date.now() - this.dateEmployment) / 31536000000);
    const preliminaryCategory = this.categoryHired + yers;
    if (preliminaryCategory >= 5) {
      return 5;
    } else {
      return preliminaryCategory;
    }
  };
}

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

class MasterCeate {
  constructor(data) {
    data.forEach(element => {
      const master = new Master();
      master.id = element.id;
      master.login = element.login; //Изменить на не пустое
      master.pasword = element.pasword; //Изменить на не пустое
      master.firstName = element.firstName;
      master.lastName = element.lastName;
      master.dateEmployment = new Date(element.dateEmployment);
      master.categoryHired = element.categoryHired;
      masters.masters.push(master);
    });
  };
};

const masters = new Masters();

new UserService().getFetch().then(data => {
  new MasterCeate(data);
});

new UserService().getHXMhttp().then(data => {
  // new MasterCeate(data);
});

export { masters };
