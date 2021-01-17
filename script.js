const mainHeading = document.createElement('h1');
mainHeading.innerText = "Etch-a-Sketch";
document.body.prepend(mainHeading);

const main = document.querySelector('.main');

const container = document.querySelector('.container');
const containerStyle = getComputedStyle(container);
const containerSize = container.clientHeight;

const optionsContainer = document.createElement('div');
optionsContainer.classList.add('options-container');
main.prepend(optionsContainer);

const clearButton = document.createElement('button');
clearButton.innerText = "Clear Grid";
clearButton.classList.add('btn');
// optionsContainer.prepend(clearButton);

const fullClearGrid = () => {
    container.innerHTML = '';
}

const changeSize = document.createElement('input');
changeSize.setAttribute('type', 'number');
changeSize.setAttribute('value', '16');
changeSize.setAttribute('min', '10');
changeSize.setAttribute('max', '64');

const colorPicker = document.createElement('input');
colorPicker.setAttribute('type', 'color');
optionsContainer.append(changeSize, colorPicker, clearButton);

const labelSize = document.createElement('label');
labelSize.setAttribute('for', 'size');
labelSize.innerText = 'Squares per side: '
optionsContainer.prepend(labelSize);

// Default grid size is going to be 16x16, but users can change it.
const createGrid = () => {
    let selectedValue = parseInt(changeSize.value);
    let index = 1;
    while (index <= selectedValue *  selectedValue) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseenter', (e) => {
            let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; // gives a random hex color;
            gridElement.style.background = `${colorPicker.value}`;
            // gridElement.classList.add('change-to-black');
        })
    
        clearButton.addEventListener('click', () => {
            gridElement.style.background = `#fff`;
            // gridElement.classList.remove('change-to-black');
        });
    
        container.append(gridElement);
        index++;
    }

    container.style.gridTemplateColumns = `repeat(${(selectedValue)}, ${containerSize / (selectedValue)}px)`;
    container.style.gridTemplateRows = `repeat(${(selectedValue)}, ${containerSize / (selectedValue)}px)`;
}
createGrid();

changeSize.addEventListener('change', () => {
    fullClearGrid();
    createGrid();
    // selectedValue = parseInt(changeSize.value);
    // let index = 1;
    // while (index <= selectedValue *  selectedValue) {
    //     const gridElement = document.createElement('div');
    //     gridElement.classList.add('grid-element');
    //     gridElement.addEventListener('mouseover', () => {
    //         gridElement.classList.add('change-to-black');
    //     })
    
    //     clearButton.addEventListener('click', () => {
    //         gridElement.classList.remove('change-to-black');
    //     });
    
    //     container.append(gridElement);
    //     index++;
    // }
    
    // container.style.gridTemplateColumns = `repeat(${(selectedValue)}, ${containerSize / (selectedValue)}px)`;
    // container.style.gridTemplateRows = `repeat(${(selectedValue)}, ${containerSize / (selectedValue)}px)`;
})







// const selectedValue = parseInt(changeSize.value); // for now

// let index = 1;
//     while (index <= selectedValue *  selectedValue) {
//     const gridElement = document.createElement('div');
//     gridElement.classList.add('grid-element');
//     gridElement.addEventListener('mouseover', () => {
//         gridElement.classList.add('change-to-black');
//     })

//     clearButton.addEventListener('click', () => {
//         gridElement.classList.remove('change-to-black');
//     });

//     container.append(gridElement);
//     index++;
// }

// container.style.gridTemplateColumns = `repeat(${(selectedValue)}, ${containerSize / (selectedValue)}px)`;
// container.style.gridTemplateRows = `repeat(${(selectedValue)}, ${containerSize / (selectedValue)}px)`;




