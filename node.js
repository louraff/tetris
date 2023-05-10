/*----- constants -----*/


/*----- state variables -----*/
const score;
const level;
const linesCleared;

const currentShape;
const currentRotation;
const nextShape;
const ghostShape;

const width = 10
const height = 15
const cellCount = width * height
const cells = []

/*----- cached elements  -----*/
const grid = document.querySelector('.grid')

/*----- event listeners -----*/


/*----- functions -----*/


function createGrid() {
    for (let i = 0; i < cellCount; i++) {

        const cell = document.createElement('div')
        cell.innerText = i
        cell.id = i // ? Is this needed?
        cell.dataset.index = i

        console.log(cell)

        cell.style.height = `${100 / height} %`
        cell.style.width = `${100 / width} %`

        grid.appendChild(cell)
        cells.push(cell)
    }
}

createGrid()
