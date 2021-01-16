//31.25

const container = document.querySelector('.container');


let index = 1;
while (index <= (16 * 16)) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    
    gridElement.addEventListener('mouseover', () => {
        gridElement.classList.add('change-to-black');
    })
    
    container.append(gridElement);
    index++;
}