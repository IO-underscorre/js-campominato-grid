// Append a number of landfield sector's div to a minefield contrainer
function createLandfield (minefieldElement , numberOfSectors) {
    const numberOfRowsAndColumns = Math.sqrt(numberOfSectors);
    minefieldElement.style.gridTemplate = `repeat(${numberOfRowsAndColumns} , 1fr) / repeat(${numberOfRowsAndColumns} , 1fr)`;

    minefield.innerHTML = '';
    
    for (i = 0 ; i < numberOfSectors ; i++) {
        minefieldSector = createElementWithClass('div' , 'minefield-sector');

        minefieldSector.addEventListener('click' , function () {
            this.classList.add('checked');
        });

        minefieldElement.append(minefieldSector);
    }
}


// Create an element with a class
function createElementWithClass(elementTag , className) {
    const element = document.createElement(elementTag);
    element.classList.add(className);
    return element;
}