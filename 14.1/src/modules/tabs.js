import { ClassHelper } from "./classHelper.js";

/* объект с масивами кнопок линков и дивов */
const htmlElements = {
  links: document.querySelectorAll(".container .links a"),
  tabs: document.querySelectorAll(".container .tabs > div")
};

/* в методе init методом  forEach вешаем на link обработчки на клик который
снимает класс selected со всех и добавляет выбранному вешает всем табам hidden
и удаляет у выбранного*/
class Tabs {
  init() {
    htmlElements.links.forEach(function(link) {
      link.addEventListener("click", linkClicked);
    });
    enableTab("clock");
  }
}

/* Принимает дополнительное здачение data-mode */
function linkClicked() {
  enableTab(this.dataset.mode);
}

/* Передает значение дальше */
function enableTab(mode) {
  enableLink(mode);
  enableContent(mode);
}

/* удаляет selected с элементов в нутри links  вешает selected выбранному*/
function enableLink(mode) {
  ClassHelper.removeClass("selected", htmlElements.links);
  htmlElements.links.forEach(function(link) {
    if (link.dataset.mode === mode) {
      ClassHelper.addClass("selected", [link]);
    }
  });
}

/* Добавляет всем елементам внутри  tabs - hidden и снимает hidden с выбранного*/
function enableContent(mode) {
  ClassHelper.addClass("hidden", htmlElements.tabs);
  htmlElements.tabs.forEach(function(tab) {
    if (tab.dataset.mode === mode) {
      ClassHelper.removeClass("hidden", [tab]);
    }
  });
}

export { Tabs };
