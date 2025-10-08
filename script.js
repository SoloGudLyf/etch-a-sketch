const container = document.querySelector(".container");

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }
}
createGrid();
