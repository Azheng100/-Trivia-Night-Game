const url = "https://animechan.vercel.app/"

//fake answers bank 
let fakeAnswers = [{name2:'Ichicgo Kurosaki', anime2: 'Bleach'}, {name2:'Hamtaro', anime2: 'Hamtaro'},{name2:'Saitama', anime2: 'One Punch man'},{name2:'Shinji Ikari', anime2: 'Neon Genesis Evangelion'}, {name2:'Edward Elric', anime2: 'Full Metal Alchemist'}, {name2:'Mai valentine', anime2: 'Yugioh Duel Monsters'}, {name2:'Goku', anime2: 'Dragonball Z'}, {name2:'Yamcha', anime2: 'Dragonball'}, {name2:'Paradox Brothers', anime2: 'Yugioh GX'}, {name2:'Yu Narukami', anime2: 'Persona 4: The Animation'}, {name2:'Adachi', anime2: 'Persona 4: The Golden Animation'}, {name2:'Satsuki Kiryuin', anime2: 'Kill la Kill'}, {name2:'Ryuko Matoi', anime2: 'Kill la Kill'}, {name2:'', anime2: 'Kill la Kill'}]


//for (let i=0; i<fakeAnswers.length; i++){
    //console.log(fakeAnswers[i].name2);
//}




//testing if the link works 
fetch(url)
  .then(res => {
    console.log("success!", res);
  })
  .catch(err => {
    console.log("error", err);
  });


  //testing the api
  //fetch('https://animechan.vercel.app/api/random')
   // .then(response => response.json())
   // .then(quote => console.log(quote.character))


// Question button logic here
let answer = false 
let button = document.querySelector('#nextQuestion')

let placement1 = document.querySelector('#anime1') 
let placement2 = document.querySelector('#anime2') 
let placement3 = document.querySelector('#anime3') 
let placement4 = document.querySelector ('#anime4') 

let placementA =document.querySelector('#character1')
let placementB =document.querySelector('#character2')
let placementC =document.querySelector('#character3')
let placementD =document.querySelector('#character4')

let placementLogic = [placement1, placement2, placement3, placement4] //anime
let placementLogic2 =[placementA,placementB,placementC,placementD]

//character

//let placementLogic = [{array1: placement1, array2: placementA}, {array1: placement2, array2: placementB},{array1: placement3, array2: placementC} , {array: placement4, array2: placementD} ]


function placementSelector(){
    let x = Math.floor((Math.random()*4))
    let randomPlacement= x
    
    return placementLogic[randomPlacement] 


} 




//function placementSelector2(){
  //let x = Math.floor((Math.random()*4))
  ///let randomPlacement= x

  //return placementLogic2[randomPlacement] 

//}





function correctAnswer(res){
  console.log ('is it working')
 let animeTitle = placementSelector()
 animeTitle.innerText = res.anime
  let quoteQuestion = document.querySelector('#saidQuote')
  quoteQuestion.innerText = res.quote
 if(animeTitle=== placement1){
  let character = placementA
  character.innerText = res.character
 }else if(animeTitle === placement2){
  character = placementB
  character.innerText = res.character
 }else if(animeTitle === placement3){
  character = placementC
  character.innerText = res.character
 }else if(animeTitle === placement4){
  character = placementD
  character.innerText = res.character
 }
  
}




async function getQuestion (){
    fetch('https://animechan.vercel.app/api/random')
      .then(res=>{
         return res.json()
      })
      .then(res=>{
      correctAnswer(res)
        
      })
      
      //insert dummy answers
}

button.addEventListener('click', getQuestion)
    
// Decided that character and anime will be A B C D
//quote will be the only thing shown on question


//need a method to swap around A B C D
//first see if different calls can be made


// actually i realized I can literally just make an array with fake answers

//map the divs. tell api call to put it in any one randomly. mathfloor() 

// add a function to pick random name in a random spot. It cannot equal the placement of the answer. It cannot equal the intnertext of the answer. 

//1. make the api  all a random call for placement. 

//the buttons a b c d actually equals the answer


//separate function that tracks number of corrects 
//display wrong or right if right points++ or nothing happen 



