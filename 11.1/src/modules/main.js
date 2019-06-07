const htmlButton = document.querySelector('button');
htmlButton.addEventListener('click',onButtonlogInClicked);

function onButtonlogInClicked(){
  if(checkPassword() === true){
    alert('OK');
  }
}

function checkPassword(){
  let pasword = prompt('enter pasword');
  if(pasword !== 'q1w2e3'){
    return checkPassword()
  }
  else{
    return true;
  }
}