const tetrominos = { 
  square : {
    color: 'green',
    rotations: [
    [1,1],
    [1,1]
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
