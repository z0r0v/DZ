const htmlElement = {
  nav: document.querySelectorAll("ul>li>a"),
  link: document.querySelector("ul>li>a"),
  divMaster:document.querySelector('.masterInfo'),
  tabs:document.querySelectorAll(".tabs"),
};


function Tabs() {
  const arrayElements = Array.from(htmlElement.nav);
  arrayElements.forEach(element => {
    element.addEventListener("click", onTabsClick);
  });

  function onTabsClick() {
    arrayElements.forEach(element => {
      element.classList.remove("disabled");
    });

    event.path[0].classList.add("disabled");

    const mode = event.path[0].dataset.mode;

    const master = htmlElement.tabs[0].children[2];
 
    const auto = htmlElement.tabs[0].children[0];
    const work = htmlElement.tabs[0].children[1];
    const arrayTabs = Array.from(htmlElement.tabs[0].children);
    
    arrayTabs.forEach(element => {
      element.classList.add('hidden');
    })

    switch (mode) {
      case "Master":
          master.classList.remove('hidden');
        break;
      case "Auto":
          auto.classList.remove('hidden');
        break;
      case "Work":
          work.classList.remove('hidden');
        break;
    }
  }
}

export { Tabs };
