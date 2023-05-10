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
  
  const sequence = ['square', 'L', 'skew', 'T', 'Line']

/*----- state variables -----*/
const score = 0
const level = 1
const linesCleared = 0
const levelUp = 5

const startingSpeed = 500
const speedIncrease = 0.9

let currentShape = null
const currentRotation = null
const nextShape = null
const ghostShape = null

const width = 10
const height = 15
const cellCount = width * height
const cells = []
const squareIndices = []


let startingRow = 0
let startingCol = 4

/*----- cached elements  -----*/
const grid = document.querySelector('.grid')

/*----- event listeners -----*/
document.addEventListener('keydown', handleUserInput)

/*----- functions -----*/

init()

function init() {
    createGrid(generateShape)
}

function generateRandomShape(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)

    const shape = arr[randomIndex]
    return shape
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
        startingCol--
    } else if (key === right) {
        startingCol++
    } else if (key === down) {
        startingRow++
    } else if (key === space) {
        // ! ADD CODE
    } else if (key === up) {
        // ! ADD CODE
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

 function generateShape() {
        tetrominos.square.rotations[0].forEach(function(colArr, colIdx) {
            colArr.forEach(function(cellVal, rowIdx) { 
            if (cellVal === 1) {

               gameBoardRow = startingRow + rowIdx
               gameBoardCol = startingCol + colIdx

                gameBoardIndex = gameBoardRow * width + gameBoardCol
                cells[gameBoardIndex].classList.add('square')
                squareIndices.push(gameBoardIndex)
            }
        })
    })
 }

 function removeShape() {
    squareIndices.forEach(index => {
        cells[index].classList.remove('square')
    })
    squareIndices.length = 0
 }

 function playGame() {
    currentShape = generateRandomShape(sequence)
    gameLoop()
 }

 function gameLoop() {
    removeShape()
    startingRow++
    generateShape()
    setTimeout(gameLoop, startingSpeed)
 }

 playGame()

 
//  setInterval( {

//  function gameLoop({
//    currentShape = tetromino.generateRandomShape(sequence).rotations[0]
//     for(let cell of cells) {
    
//     tetrominos.square.rotations[0].forEach(function(colArr, colIdx) {
//         colArr.forEach(function(cellVal, rowIdx) { 
//         if (cellVal !== 0) {
            
//         }
//      })
//     })
// }

//  }, startingSpeed)


})