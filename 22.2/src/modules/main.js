
const htmlElements = {
  myLink:document.querySelector('.myLink'),
}

htmlElements.myLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = "http://google.com";
});