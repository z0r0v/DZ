function addClass(className, elements) {
    elements.forEach(function(elements){
        elements.classList.add(className);
    });
}

function removeClass(className, elements) {
    elements.forEach(function(elements){
        elements.classList.remove(className);
    });
}

function ClassHelper(){};
ClassHelper.addClass = addClass;
ClassHelper.removeClass = removeClass;

export { ClassHelper };