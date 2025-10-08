const container = document.querySelector(".container");
const setGridSizeBtn = document.querySelector(".setGridSize");
let gridSquareArr = [];

function createGrid(num) {
  for (let i = 0; i < num ** 2; i++) {
    const div = document.createElement("div");
    div.style.cssText = `width: calc(40vw/${num}); height:calc(40vw/${num})`;
    container.appendChild(div);
  }
}

container.addEventListener("mouseover", (e) => {
  let divHovered = e.target;
  gridSquareArr.push(divHovered); // Help count number of squares hovered

  //Set random color upon hovering a square
  let randomColor = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(
    Math.random() * 256
  )} ${Math.floor(Math.random() * 256)}`;
  divHovered.style.backgroundColor = randomColor;

  // Produce progressive darkening effect
  divHovered.style.opacity = 1 - 0.1 * gridSquareArr.length;
});

setGridSizeBtn.addEventListener("click", () => {
  container.innerHTML = "";
  let size = +prompt("How many squares per side do you want for the new grid?");
  if (size > 100) {
    alert("Grid size should be less than 100");
    alert("Defaulting to 16x16 grid");
    createGrid(16);
  } else {
    createGrid(size);
  }
});

createGrid(16);
