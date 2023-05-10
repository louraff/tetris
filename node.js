/*----- constants -----*/


/*----- state variables -----*/
const score = 0
const level = 1
const linesCleared = 0
const levelUp = 5

const startingSpeed = 500
const speedIncrease = 0.9

const currentShape = null
const currentRotation = null
const nextShape = null
const ghostShape = null

const width = 10
const height = 15
const cellCount = width * height
const cells = []

/*----- cached elements  -----*/
const grid = document.querySelector('.grid')

/*----- event listeners -----*/
document.addEventListener('keydown', handleUserInput)

/*----- functions -----*/
function handleUserInput(event) {
    console.log(event.keyCode)

    const key = event.keyCode
    const up = 38
    const down = 40
    const left = 37
    const right = 39
    const space = 32

    switch (key) {
        case left : //left

            break
        case right : //right

            break
        case down : //down

            break
        case space : //spacebar

            break
        case up : //up

            break
        default:
            return 'Invalid Key'
            break
    }
}

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
