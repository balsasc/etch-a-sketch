const gridContainer = document.querySelector(".grid-wrapper");
const size = document.querySelector(".size");
const blackPen = document.querySelector(".black");
const eraser = document.querySelector(".erase");
const randomColor = document.querySelector(".random");
const clearButton = document.querySelector(".clear");
const selectedColor = document.querySelector(".color");

let width = parseInt(size.value);
let height = parseInt(size.value);
let gridSize = 640;

gridContainer.style.height = `${gridSize}px`;
gridContainer.style.width = `${gridSize}px`;

const createGrid = (h, w) => {
  for (let i = 0; i < h * w; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.height = `${gridSize / h}px`;
    gridItem.style.width = `${gridSize / w}px`;
    gridItem.style.border = `1px solid #555`;
    gridContainer.append(gridItem);
  }
  gridContainer.style.gridTemplateColumns = `repeat(${parseInt(size.value)}, ${gridSize / h}px)`
}

createGrid(height, width);

size.addEventListener('change', () => {
  gridContainer.innerHTML = "";
  createGrid(parseInt(size.value), parseInt(size.value));
})

const allGridItems = document.querySelectorAll(".grid-item");

clearButton.addEventListener('click', () => {
  allGridItems.forEach(item => {
    item.classList.add('white');
  })
})

blackPen.addEventListener('click', () => {
  allGridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('dark');
      if (item.classList.contains('white')) {
        item.classList.remove('white');
      }
    })
  })
})

eraser.addEventListener('click', () => {
  allGridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('white');
      if (item.classList.contains('dark')) {
        item.classList.remove('dark');
      }
    })
  })
})

randomColor.addEventListener('click', () => {
  allGridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      item.style.backgroundColor = randomColor;
        item.classList.remove('dark');
        item.classList.remove('white');
    })
  })
})