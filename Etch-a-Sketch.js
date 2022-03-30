let gridSize = 8

const grids = document.querySelector(".grids");

//add each grid into the container
for (let num = 0; num < gridSize**2; num++) {
    let gridContainer = document.createElement('div');
    gridContainer.classList.add('gridBlock');
    grids.appendChild(gridContainer);
    
}
