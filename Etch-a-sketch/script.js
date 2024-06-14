// your javascript file
let gridContainer = document.querySelector('#grid-container');
let size = 20;
gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
fillGrid(size);

function fillGrid(size) {
  document
    .querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e));
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList = "grid-item";
    gridElement.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridElement);
  }
}

function changeSize(){
  size = prompt("Enter new size");
  fillGrid(size);
}

function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}