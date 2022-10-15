let placement1 = 1
let placement2 = 2
let placement3 = 3
let placement4 = 4

let placementA = 'a'
let placementB ='b'
let placementC ='c'
let placementD ='d'

//let placementLogic = [placement1, placement2, placement3, placement4] //anime
//let placementLogic2 =[placementA,placementB,placementC,placementD]

//character

let placementLogic = [{array1: placement1, array2: placementA}, {array1: placement2, array2: placementB},{array1: placement3, array2: placementC} , {array: placement4, array2: placementD} ]

function placementSelector(){
    let x = Math.floor((Math.random()*4))
    let randomPlacement= x
    
    console.log( placementLogic[randomPlacement] )

} 

placementSelector()