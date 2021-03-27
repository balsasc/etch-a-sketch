const gridContainer = document.querySelector(".grid-wrapper");
const size = document.querySelector(".size");

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
    gridItem.style.border = `1px solid #333`;
    gridContainer.append(gridItem);
  }
  gridContainer.style.gridTemplateColumns = `repeat(${parseInt(size.value)}, ${gridSize / h}px)`
}

createGrid(height, width);

size.addEventListener('change', () => {
  gridContainer.innerHTML = "";
  createGrid(parseInt(size.value), parseInt(size.value));
})

