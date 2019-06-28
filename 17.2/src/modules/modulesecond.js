function summ(value){
  let result = 0;
  
  function summ2(value){
    result += value;
    return summ2;
  }
  
  summ2.show = () =>{
    console.log('result', result);
  }

  summ2(value);

  return summ2
}

summ(2)(3)(5)(4).show();
