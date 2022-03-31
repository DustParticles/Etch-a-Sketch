let gridSize = 8;
const colorPick = document.querySelector("#colorPicker");
const gridContainer = document.querySelector(".grids");

//create and add each grid into the container
for (let entries = 0; entries < gridSize**2; entries++) {
    let grids = document.createElement('div');
    grids.classList.add('gridBlock');
    grids.setAttribute("draggable", "false")
    gridContainer.appendChild(grids);
    
}

//select all gridBlocks
let gridBlocks = document.querySelectorAll(".gridBlock");

//detects if is being hovered over
gridBlocks.forEach(
    hovered => hovered.addEventListener("mouseover", isHovered)
);

//change color if hovered
function isHovered() {
    this.style.backgroundColor = colorPick.value;
}
