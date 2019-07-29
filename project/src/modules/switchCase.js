//Замененный switchCase
const htmlElements = {
  masterInfo: document.querySelector(".masterInfo"),
  autoInfo: document.querySelector(".autoInfo")
};

const modeList = {
  "Master": htmlElements.masterInfo,
  "Auto": htmlElements.autoInfo
};

class SwitchCase {
  constructor(elementDataAttribute) {
    if (elementDataAttribute in modeList) {
      modeList[elementDataAttribute].classList.remove("hidden");
    } else {
      throw new Error("Error in onTabsClick module tabs str 33");
    };
  };
};

export { SwitchCase };
