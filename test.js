placement1 = 'a'
placement2= 'b'
placement3 = 'c'
placement4= 'd'


let placementLogic = [placement1, placement2, placement3, placement4]

function placementSelector(){
    let randomPlacement= Math.floor((Math.random()*4))
   
    //return placementLogic[randomPlacement-1]
    console.log(placementLogic[randomPlacement])
} 


placementSelector()