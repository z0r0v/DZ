const masterArray = [
   {
  login:"Kshishtykov123",
  pasword:"123321",
  firstName: "Vasiliy",
  LastName: "Kshishtykov",
  dateEmployment:new Date('February 22, 2016 14:24:00'),
  workExperience: function(){
   masterArray[this].dateEmployment -  new Date().getDate();
  },
  categoryHired:"3",
  category:'3'//Придумать как поситать категорию;
   },
  {
   login:"Petrovich123",
   pasword:"1641",
   firstName: "Genady",
   LastName: "Petrovich",
   dateEmployment:new Date('July 18, 2016 14:24:00'),
   workExperience: function(){
    masterArray[this].dateEmployment -  new Date().getDate();
   },
   categoryHired:"3",
   category:'3'//Придумать как поситать категорию;
    },
  ];
  
  export{masterArray}