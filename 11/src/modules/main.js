function onButtonClicked(){
    if (checkPassword() === true){
      alert("OK");
    }
  }
  
  function checkPassword(){
    let a = prompt("password");
    if (a !== 'mypassword'){
      return checkPassword();
    }
    return true;
  }