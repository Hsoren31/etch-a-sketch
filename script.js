//16X16 Grid
const gridContainer = document.getElementById("grid-container");

function makeGrid(rowNum, columnNum){
    for (r = 0; r < rowNum; r++){
        const row = document.createElement('div');
        row.className = 'grid-row';
        gridContainer.appendChild(row);

        for(j = 0; j < columnNum; j++){
            const column = document.createElement('div');
            column.className = 'grid-column';
            row.appendChild(column);
        }
    }
}

makeGrid(16, 16);
