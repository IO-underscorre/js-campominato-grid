const difficultyForm = document.getElementById('difficulty-form');
const difficultySettings = document.getElementById('dificulty-settings');
const minefield = document.getElementById('minefield');

difficultyForm.addEventListener('submit' , function () {
    let sectorsNumber;

    if(difficultySettings.value === 'easy') {
        sectorsNumber = 100;
    } else if(difficultySettings.value === 'medium') {
        sectorsNumber = 81;
    } else {
        sectorsNumber = 49;
    }

    createLandfield(minefield , sectorsNumber);
});


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