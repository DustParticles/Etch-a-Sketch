let gridSize = 20;
const colorPick = document.querySelector("#colorPicker");
const gridContainer = document.querySelector(".grids");

//create and add each grid into the container
for (let entries = 0; entries < gridSize**2; entries++) {
    let grids = document.createElement('div');
    grids.classList.add('gridBlock');
    grids.setAttribute("draggable", "false")
    grids.style.display = "flex";
    grids.style.flexGrow = "1";
    gridContainer.appendChild(grids);
    
}

//select all gridBlocks
let gridBlocks = document.querySelectorAll(".gridBlock");

//detects if is being hovered over
gridBlocks.forEach(
    hovered => hovered.addEventListener("mouseover", isHovered)
);

//detects if random color button is clicked 
let randomColorButton = document.querySelector(".randomColors");
    //toggles between true or false if button pressed
let toggle = false;
let unToggle = () => { 
    toggle = (toggle === false) ? true : false;
    if(toggle) {
        randomColorButton.innerText = "Turn off RGB";
    }
    else randomColorButton.innerText = "RGB POGGERS";
}
randomColorButton.addEventListener("click", unToggle);

//randomly changes color if hovered
function randomRGB() {
    let randomNumber = () => {return Math.floor(Math.random() * 255)};
    let rgb = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    return rgb;
}

//change color if hovered
function isHovered() {
    if (toggle) {
        this.style.backgroundColor = randomRGB();
    }
    else this.style.backgroundColor = colorPick.value;
}

//reset etch-a-sketch
let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetColor);
function resetColor() {
    gridBlocks.forEach(color => {
        color.style.backgroundColor = "";
    });
}


//gridBlocks.forEach(clickDraw => clickDraw.addEventListener("click", clickDrawing));
/* 
function clickDrawing() {
    this.style.backgroundColor = "red";
} 

//listen to when mouse is hovering over gridBlock
gridBlocks.forEach(gridColor => gridColor.addEventListener("mouseover", hoverColor));

//change grid color when hovering
function hoverColor(e) {
    console.log(e);
    this.style.backgroundColor = "blue";


} */
