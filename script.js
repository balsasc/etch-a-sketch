const gridContainer = document.querySelector(".grid-wrapper");
const size = document.querySelector(".size");

containerHeight = 650;
let height = parseInt(size.value) * parseInt(size.value);


gridContainer.style.gridTemplateColumns = `repeat(${parseInt(size.value)}, ${containerHeight / parseInt(size.value)}px)`
  
for (let i = 0; i < height; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.style.height = `${containerHeight / parseInt(size.value)}px`;
  gridItem.style.width = `${containerHeight / parseInt(size.value)}px`;
  gridContainer.append(gridItem);
}

const clear = () => {
  // todo
}