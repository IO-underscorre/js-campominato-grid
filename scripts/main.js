// Create an element with a class
function createElementWithClass(elementTag , className) {
    const element = document.createElement(elementTag);
    element.classList.add(className);
    return element;
}