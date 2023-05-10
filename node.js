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

const startingRow = 0
const startingCol = 4

/*----- cached elements  -----*/
const grid = document.querySelector('.grid')

/*----- event listeners -----*/
// document.addEventListener('keydown', handleUserInput)

/*----- functions -----*/
// function addShape(startingPosition) {
//     cells.startingPosition.classList.add('')
// }

// function handleUserInput(event) {
//     console.log(event.keyCode)

//     const key = event.keyCode
//     const up = 38
//     const down = 40
//     const left = 37
//     const right = 39
//     const space = 32

//     if (key === left && startingCol % width !== 0) {
//                 console.log('up')
//                 startingCol -= width
// }
// }

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
            }
        })
    })
 }

 

createGrid(generateShape)
})