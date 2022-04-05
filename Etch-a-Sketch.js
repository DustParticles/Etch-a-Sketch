//assigns grid size
let sliderValue = document.querySelector(".pixelSize");
let sliderOutput = document.querySelector(".sliderOutput");
let gridSelector = document.querySelector(".grids")
//display current grid size
sliderOutput.textContent = `${sliderValue.value} x ${sliderValue.value}`

const colorPick = document.querySelector("#colorPicker");
const gridContainer = document.querySelector(".grids");

let height;
let width;


//auto puts grids into gridContainer (runs once)
gridAppend(sliderValue.value);

//create and add each grid into the container
sliderValue.addEventListener('input', function () {
    //actively display slider Size.
    sliderOutput.textContent = `${sliderValue.value} x ${sliderValue.value}`;
});
sliderValue.addEventListener('change', function () {
    //remove grids
    let removeGrids = document.querySelectorAll(".gridBlock");
    removeGrids.forEach(grid => {
        grid.remove();
    });

    //add grids back
    gridAppend(sliderValue.value);

    // slider Size.
    let autoCount = "auto ".repeat(sliderValue.value);
    gridSelector.style.gridTemplateColumns = autoCount;
    hovered()
    
  });

function gridAppend(gridSize) {
    //does calculation stuff
    dimensionCalc(gridSize);

    for (let entries = 0; entries < gridSize**2; entries++) {
        let createGrids = document.createElement('div');
        createGrids.classList.add('gridBlock');
        createGrids.setAttribute("draggable", "false");


        
        //set attrubutes and displays
        createGrids.style.height = `${height}px`;
        createGrids.style.width = `${width}px`;
        gridContainer.appendChild(createGrids);
    }

    //styling
    let autoCount = "auto ".repeat(sliderValue.value);
    gridSelector.style.gridTemplateColumns = autoCount;
}
//calculate HEIGHT AND WIDTH
function dimensionCalc(gridSize) {
    //get canvas Height And Width
    let heightCanvas = gridContainer.clientHeight +1;
    let widthCanvas = gridContainer.clientWidth +1;
    
    //calculate Height and Width for individual pixels
    heightCanvas /= gridSize;
    widthCanvas  /= gridSize;

    //leaves 2 decimal
    height = heightCanvas.toFixed(2);
    width = widthCanvas.toFixed(2);
}

//select all gridBlocks
hovered() //auto runs (once)
function hovered() {
    let gridBlocks = document.querySelectorAll(".gridBlock");

    //detects if is being hovered over
    gridBlocks.forEach(
        hovered => hovered.addEventListener("mouseover", isHovered)
    );
}

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
    let gridBlocks = document.querySelectorAll(".gridBlock");
    gridBlocks.forEach(color => {
        color.style.backgroundColor = "";
    });
}
