const containerGrid = document.querySelector("#container");

//grid for drawing
function createGrid(size) {
  containerGrid.textContent = "";

  for (let i = 0; i < size; i++) {
    const col = document.createElement("div");
    col.classList.add("col");

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      col.appendChild(square);

      //draw in grid
      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = rndColor();
      });
    };

    containerGrid.appendChild(col);
  };
};
createGrid(16);

//user's grid size choice
const changeSize = document.querySelector("#chSize");
changeSize.addEventListener("click", (e) => {
  const size = prompt("How big would you like to resize?");
  
  if(size <= 0 || size > 100) {
    size = 16;     
  };
  
  createGrid(size);
});

//functions
//rainbow
function rndColor() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
};
function random(number) {
  return Math.floor(Math.random() * number);
};