const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  const col = document.createElement("div");
  col.classList.add("col");
  
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    col.appendChild(square);
    
    square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
        console.log(e.type + "!");
    });
  };
  
  container.appendChild(col);
};