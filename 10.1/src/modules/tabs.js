/* объект с масивами кнопок линков и дивов */
const htmlElements = {
    button:document.querySelectorAll('.container .buttons button'),
    links:document.querySelectorAll('.container .links a'),
    tabs:document.querySelectorAll('.container .tabs > div')
}

function Tabs(){}
/* в методе init методом  forEach вешаем на link обработчки на клик который
снимает класс selected со всех и добавляет выбранному вешает всем табам hidden
и удаляет у выбранного*/
Tabs.prototype.init = function(){
    htmlElements.links.forEach(function(link) {
        link.addEventListener('click', linkClicked);
    });
    enableTab('clock');
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
    removeClass('selected', htmlElements.links);
    htmlElements.links.forEach(function(link) {
        if(link.dataset.mode === mode){
           addClass('selected', [link]);
        }
    });
}

/* Добавляет всем елементам внутри  tabs - hidden и снимает hidden с выбранного*/
function enableContent(mode) {
    addClass('hidden', htmlElements.tabs);
    htmlElements.tabs.forEach(function(tab){
        if(tab.dataset.mode === mode) {
            removeClass('hidden', [tab]);
        }
    });
}


function addClass(className, elements) {
    for(let i = 0; i<elements.length; i++) {
        elements[i].classList.add(className);
    }
}


function removeClass(className, elements) {
    elements.forEach(function(elements){
        elements.classList.remove(className);
    });
}


export {Tabs};