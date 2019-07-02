const masterArray = [
  {
    login: "a",
    pasword: "123",
    firstName: "Vasiliy",
    LastName: "Kshishtykov",
    dateEmployment: new Date("February 22, 2016 14:24:00"),
    workExperience: function() {
      masterArray[this].dateEmployment - new Date().getDate();
    },
    categoryHired: "3",
    category: "3" //Придумать как поситать категорию;
  },
  {
    login: "b",
    pasword: "321",
    firstName: "Genady",
    LastName: "Petrovich",
    dateEmployment: new Date("July 18, 2016 14:24:00"),
    workExperience: function() {
      masterArray[this].dateEmployment - new Date().getDate();
    },
    categoryHired: "3",
    category: "3" //Придумать как поситать категорию;
  }
];

export { masterArray };
