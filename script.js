document.addEventListener('DOMContentLoaded', () => {
/*----- constants -----*/
const tetrominos = { 
    square : {
      color: 'green',
      rotations: [
        [
            [1,1],
            [1,1]
        ]
    ],   
  },
    L : {
      color: 'red',
      rotations: [
    [
      [1, 1, 1],
      [0, 0, 1]
    ],
    [
      [0, 1],
      [0, 1],
      [1, 1]
    ], 
    [
      [0, 0, 1],
      [1, 1, 1]
    ], 
    [
      [1, 0],
      [1, 0],
      [1, 1]
    ]
  ]
  },  
    skew : {
      color: 'yellow', 
      rotations: [
      [
          [0, 1, 1], 
          [1, 1, 0]
      ], 
      [
          [1, 0], 
          [1, 1], 
          [0, 1]
      ]
     ]
    },
    T : {
      color: 'blue', 
      rotations: [
      [
          [1, 1, 1],
          [0, 1, 0]
      ],
      [
          [0, 1],
          [1, 1],
          [0, 1]
      ],
      [
          [0, 1, 0],
          [1, 1, 1]
      ], 
      [
          [1, 0],
          [1, 1],
          [1, 0]
      ]
     ]
    },  
    line : {
      color: 'purple',
      rotations: [
      [
          [1],
          [1],
          [1],
          [1]
      ], 
      [
          [1, 1, 1, 1]
      ]
     ]
    }
  }
  
  const sequence = ['square', 'L', 'skew', 'T', 'line']

/*----- state variables -----*/
const score = 0
const level = 1
const linesCleared = 0
const levelUp = 5

const startingSpeed = 900
const speedIncrease = 0.9

let currentShape;
let currentRotation;
const nextShape = null
const ghostShape = null

const width = 10
const height = 15
const cellCount = width * height
const cells = []
const shapeIndices = []


let startingRow = 0
let startingCol = 4

/*----- cached elements  -----*/
const grid = document.querySelector('.grid')

/*----- event listeners -----*/
document.addEventListener('keydown', handleUserInput)

/*----- functions -----*/

init()

function init() {
    createGrid(() => {
        currentShape = generateRandomShape(sequence)
        generateShape()
     });
}

function generateRandomShape(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)

    const shape = arr[randomIndex]
    return shape
}

function generateShape() {
    tetrominos[currentShape].rotations[0].forEach(function(colArr, colIdx) {
        colArr.forEach(function(cellVal, rowIdx) { 
        if (cellVal !== 0) {

           gameBoardRow = startingRow + rowIdx // 1
           gameBoardCol = startingCol + colIdx // 5

           gameBoardIndex = gameBoardRow * width + gameBoardCol

           cells[gameBoardIndex].classList.add(currentShape)

           cells[gameBoardIndex].classList.add(tetrominos[currentShape].color)
            
            shapeIndices.push(gameBoardIndex)
        }
    })
})
}

function removeShape() {
shapeIndices.forEach(index => {
    cells[index].classList.remove(tetrominos[currentShape].color)
    cells[index].classList.remove(currentShape)
})
shapeIndices.length = 0
}

function handleUserInput(event) {
    console.log(event.keyCode)

    const key = event.keyCode
    const up = 38
    const down = 40
    const left = 37
    const right = 39
    const space = 32

   

    if (key === left) {
        if (isValidMove(startingRow, startingCol - 1)) {
            startingCol--
        } 
    } else if (key === right) {
        if (isValidMove(startingRow, startingCol + 1)) {
            startingCol++
        }
    } else if (key === down) {
        if (isValidMove(startingRow + 1, startingCol)) {
        startingRow++
        }
    } else if (key === space) {
        // ! ADD CODE
    } else if (key === up) {
        rotateTetromino()
    }
    
    removeShape()
    generateShape()
}

function createGrid(cb) {
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
    cb()
}

 

 function playGame() {
    currentShape = generateRandomShape(sequence)
    setInterval(gameLoop, startingSpeed)
 }

 function gameLoop() {

    if (isValidMove(startingRow + 1, startingCol)) {
        startingRow++
    } else {
        
    }

    removeShape()
    generateShape()
    setTimeout(gameLoop, startingSpeed)
 }

 playGame()

 function isValidMove(newRow, newCol, rotation = currentRotation) {
    for (let colIdx = 0; colIdx < rotation.length; colIdx++) {
        for (let rowIdx = 0; rowIdx < rotation[colIdx].length; rowIdx++) {
            if (rotation[colIdx][rowIdx] !== 0) {
                const newRowPosition = newRow + rowIdx
                const newColPosition = newCol + colIdx

                if (
                    newRowPosition < 0 || newRowPosition >= height || newColPosition < 0 || newColPosition >= width || cells[newRowPosition * width + newColPosition].classList.contains(currentShape)) {
                        return false
                    }
                }
            }
        } return true
    } 


function rotateTetromino() {
    const currentRotationIndex = tetrominos[currentShape].rotations.indexOf(currentRotation)
    const nextRotationIndex =  (currentRotationIndex + 1) % tetrominos[currentShape].rotations.length
    const nextRotation = tetrominos[currentShape].rotations[nextRotationIndex]

        if (isValidMove(startingRow, startingCol, nextRotation)) {
            currentRotation = nextRotation
        }
}




})