const htmlElements = {
  nav: document.querySelectorAll("ul>li>a"),
  link: document.querySelector("ul>li>a"),
  divMaster: document.querySelector(".masterInfo"),
  tabs: document.querySelectorAll(".tabs")
};

const arrayElements = Array.from(htmlElements.nav);
arrayElements.forEach(element => {
  element.addEventListener("click", onTabsClick);
});


function onTabsClick(event) {
  arrayElements.forEach(element => {
    element.classList.remove("disabled");
  });
  event.path[0].classList.add("disabled");
  const mode = event.path[0].dataset.mode;
  const master = htmlElements.tabs[0].children[2];
  const auto = htmlElements.tabs[0].children[0];
  const work = htmlElements.tabs[0].children[1];
  const arrayTabs = Array.from(htmlElements.tabs[0].children);

  arrayTabs.forEach(element => {
    element.classList.add("hidden");
  });

  switch (mode) {
    case "Master":
      master.classList.remove("hidden");
      break;
    case "Auto":
      auto.classList.remove("hidden");
      break;
    case "Work":
      work.classList.remove("hidden");
      break;
  }
}

function Tabs() {}
// Tabs.prototype.init = function() {};

export { Tabs };
