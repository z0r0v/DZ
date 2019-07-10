const htmlElement = {
  body: document.querySelector("body")
};

function Slider() {
  htmlElement.body.classList.add("slide");

  const slider = setInterval(cheSlideBG, 7000);

  let slide = 0;
  function cheSlideBG() {
    slide++;
    if (slide >= 6) {
      return (slide = 0);
    }
    htmlElement.body.classList.remove(
      "slide",
      "slide1",
      "slide2",
      "slide3",
      "slide4",
      "slide5"
    );
    htmlElement.body.classList.add(`slide${slide}`);
  }
}

export { Slider };
