const htmlElements = {
  button:document.querySelector("#button"),
};
(()=>{
  const before = new Date().getTime();
  htmlElements.button.addEventListener('click', doSomething);
  const doSomething = () => {
  
  }
})
