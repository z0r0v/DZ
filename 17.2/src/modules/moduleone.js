function duCalculation(){
  let parameter = 0;
  
  function increas(value){
    parameter += value;
  }

  function decrease(value){
    parameter -= value;
  }

  function show(){
    console.log("parameter", parameter);
  }
  
  const obj = {increas, decrease,  show};

  return obj;
}

const calculation = duCalculation();
calculation.increas(22);
calculation.decrease(11);
calculation.show();