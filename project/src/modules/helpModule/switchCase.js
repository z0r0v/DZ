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


class SwitchCase2 {
  constructor(elementDataAttribute, difference, thirtyMinutes, sixtyMinutes, elementTr) {
    const modeList2 = {
      [difference <= 0]: "text-danger",
      [difference <= thirtyMinutes]: "text-warning",
      [difference <= sixtyMinutes]: "text-success",
      [difference > sixtyMinutes]: "text-body",
    };
    if (elementDataAttribute in modeList2) {
      elementTr.classList.remove(modeList2[elementDataAttribute]);
    } else {
      throw new Error("Error in onTabsClick module book str 139");
    };
  };
};

export { SwitchCase, SwitchCase2 };
