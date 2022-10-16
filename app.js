const url = "https://animechan.vercel.app/"

//fake answers bank 
let fakeAnswers = [{name2:'Ichicgo Kurosaki', anime2: 'Bleach'}, {name2:'Hamtaro', anime2: 'Hamtaro'},{name2:'Saitama', anime2: 'One Punch man'},{name2:'Shinji Ikari', anime2: 'Neon Genesis Evangelion'}, {name2:'Edward Elric', anime2: 'Full Metal Alchemist'}, {name2:'Mai valentine', anime2: 'Yugioh Duel Monsters'}, {name2:'Goku', anime2: 'Dragonball Z'}, {name2:'Yamcha', anime2: 'Dragonball'}, {name2:'Paradox Brothers', anime2: 'Yugioh GX'}, {name2:'Yu Narukami', anime2: 'Persona 4: The Animation'}, {name2:'Adachi', anime2: 'Persona 4: The Golden Animation'}, {name2:'Satsuki Kiryuin', anime2: 'Kill la Kill'}, {name2:'Ryuko Matoi', anime2: 'Kill la Kill'}, {name2:'Senketsu', anime2: 'Kill la Kill'}, {name2: 'Sasuke', anime2: 'Naruto' }]



fetch(url)
  .then(res => {
    console.log("success!", res);
  })
  .catch(err => {
    console.log("error", err);
  });


let button = document.querySelector('#nextQuestion')

//title of show
let placement1 = document.querySelector('#anime1') 
let placement2 = document.querySelector('#anime2') 
let placement3 = document.querySelector('#anime3') 
let placement4 = document.querySelector ('#anime4') 

//character name
let placementA =document.querySelector('#character1')
let placementB =document.querySelector('#character2')
let placementC =document.querySelector('#character3')
let placementD =document.querySelector('#character4')

let placementLogic = [placement1, placement2, placement3, placement4] 
let placementLogic2 =[placementA,placementB,placementC,placementD]


//for right answer
function placementSelector(){
    let x = Math.floor((Math.random()*4))
    let randomPlacement= x
    
    return placementLogic[randomPlacement] 


} 

function randomFakeAnswer(){
  return fakeAnswers[Math.floor((Math.random()*15))]
}

// check for hp
let health = 3
let lifeTotal = document.querySelector('#lifetotal')
lifeTotal.innerText = health
function lifeTaker(){
health -= 1
lifeTotal.innerText = health
if(health === 0){
  alert ('You lose')
  getQuestion()
  health = 3
  justice.innerText = ''
}
}

//functions to check for right/wrong and update number of answers correct
let justice = document.querySelector('#truth')
justice.innerText = ' '
let answer = document.querySelector('#corrects')
let addOne = 0
answer.innerText = addOne


function correct(tile){
  if (tile === true ){
  justice.innerText = 'Correct'
  console.log( 'correct choice')
  }else{
  justice.innerText = 'Incorrect'
  console.log( 'nope')
  lifeTaker()

}
}

function plusOne(){
addOne += 1
}

function stringChecker(){
  
}
//check to see if anything repeats
// what if i do onclick?


let tileA = null
let tileB = null
let tileC = null
let tileD = null



function getAnswer(res){
  let character = null
  console.log ('is it working')
 let animeTitle = placementSelector()
 animeTitle.innerText = res.anime
  let quoteQuestion = document.querySelector('#saidQuote')
  quoteQuestion.innerText = res.quote


 if(animeTitle=== placement1){
  character = placementA
  character.innerText = res.character
  tileA = true

 }else if(animeTitle === placement2){
  character = placementB
  character.innerText = res.character
  tileB= true
  

 }else if(animeTitle === placement3){
  character = placementC
  character.innerText = res.character
  tileC = true

 }else if(animeTitle === placement4){
  character = placementD
  character.innerText = res.character
  tileD = true
 }
  if(character === placementA && animeTitle === placement1){
    getFakeAnime2 = randomFakeAnswer()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2
    tileB = false


    getFakeAnime3 = randomFakeAnswer()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2
    tileC = false

    getFakeAnime4 = randomFakeAnswer()
    fakeCharacterD = document.querySelector('#character4')
    fakeCharacterD.innerText = getFakeAnime4.name2
    fakeTitleD = document.querySelector('#anime4')
    fakeTitleD.innerText = getFakeAnime4.anime2
    tileD = false

    
  }else if(character === placementB && animeTitle === placement2){
    getFakeAnime = randomFakeAnswer()
    fakeCharacterA = document.querySelector('#character1')
    fakeCharacterA.innerText = getFakeAnime.anime2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.name2
    tileA = false

    getFakeAnime3 = randomFakeAnswer()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2
    tileC = false

    getFakeAnime4 = randomFakeAnswer()
    fakeCharacterD = document.querySelector('#character4')
    fakeCharacterD.innerText = getFakeAnime4.name2
    fakeTitleD = document.querySelector('#anime4')
    fakeTitleD.innerText = getFakeAnime4.anime2
    tileD = false


    
  }else if (character === placementC && animeTitle === placement3){
    getFakeAnime = randomFakeAnswer()
    fakeCharacterA = document.querySelector('#character1')
    fakeCharacterA.innerText = getFakeAnime.anime2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.name2
    tileA = false

    getFakeAnime2 = randomFakeAnswer()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2
    tileB= false

    getFakeAnime4 = randomFakeAnswer()
    fakeCharacterD = document.querySelector('#character4')
    fakeCharacterD.innerText = getFakeAnime4.name2
    fakeTitleD = document.querySelector('#anime4')
    fakeTitleD.innerText = getFakeAnime4.anime2
    tileC = false


  

  }else if(character === placementD && animeTitle === placement4){
    getFakeAnime = randomFakeAnswer()
    fakeCharacterA = document.querySelector('#character1')
    fakeCharacterA.innerText = getFakeAnime.anime2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.name2
    fakeAnswer = true

    getFakeAnime2 = randomFakeAnswer()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2
    fakeAnswer = true

    getFakeAnime3 = randomFakeAnswer()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2
    fakeAnswer = true
  


  }
}

async function getQuestion (){
    fetch('https://animechan.vercel.app/api/random')
      .then(res=>{
         return res.json()
      })
      .then(res=>{
      getAnswer(res)
      
      })
      
      
}

let go = button.addEventListener('click', getQuestion)

let buttonA = document.querySelector('#buttonA').addEventListener('click', ()=>{
 

    correct(tileA)
    getQuestion()

    
  })
  
  
  let buttonB = document.querySelector('#buttonB').addEventListener('click', ()=>{
    correct(tileB)
    getQuestion()
  })
  
  let buttonC = document.querySelector('#buttonC').addEventListener('click', ()=>{
      
      correct(tileC)
      getQuestion()
    })
  
  let buttonD = document.querySelector('#buttonD').addEventListener('click', ()=>{
      
      correct(tileD)
      getQuestion()
  })
  
    
// I see why we have problems. The buttons A B C D just runs the get question function but it always reset the function. Need a string checker function idea





// add a function to pick random name in a random spot. It cannot equal the placement of the answer. It cannot equal the intnertext of the answer. 

//1. make the api  all a random call for placement. 

//the buttons a b c d actually equals the answer


//separate function that tracks number of corrects 
//display wrong or right if right points++ or nothing happen 



