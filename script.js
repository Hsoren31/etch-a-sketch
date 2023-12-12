//Button
const gridButton = document.querySelector('#grid-size');

gridButton.onclick = function(){
    let gridPrompt = prompt("How many squares per side of the grid would you like?");
    makeGrid(gridPrompt);
    colorMe();
};

//Make Grid
const gridContainer = document.getElementById("grid-container");

function makeGrid(num){
    for (r = 0; r < num; r++){
        const row = document.createElement('div');
        row.className = 'grid-row';
        gridContainer.appendChild(row);
    
        for(j = 0; j < num; j++){
            const column = document.createElement('div');
            column.className = 'grid-column';
            row.appendChild(column);
        }
    }
}

//Fill in boxes
function colorMe(){
    const cells = document.querySelectorAll("div.grid-column");
    console.log(cells);

    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = 'black';
        })
    });
}