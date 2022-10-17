const url = "https://animechan.vercel.app/"

//fake answers bank 
let fakeAnswers = [{name2:'Ichicgo Kurosaki', anime2: 'Bleach'}, {name2:'Hamtaro', anime2: 'Hamtaro'},{name2:'Saitama', anime2: 'One Punch man'},{name2:'Shinji Ikari', anime2: 'Neon Genesis Evangelion'}, {name2:'Edward Elric', anime2: 'Full Metal Alchemist'}, {name2:'Mai valentine', anime2: 'Yugioh Duel Monsters'}, {name2:'Goku', anime2: 'Dragonball Z'}, {name2:'Yamcha', anime2: 'Dragonball'}, {name2:'Paradox Brothers', anime2: 'Yugioh GX'}, {name2:'Yu Narukami', anime2: 'Persona 4: The Animation'}, {name2:'Adachi', anime2: 'Persona 4: The Golden Animation'}, {name2:'Satsuki Kiryuin', anime2: 'Kill la Kill'}, {name2:'Ryuko Matoi', anime2: 'Kill la Kill'}, {name2:'Senketsu', anime2: 'Kill la Kill'}, {name2: 'Sasuke', anime2: 'Naruto'}, {name2: 'Denji', anime2: 'Chainsaw Man'}, {name2: 'Makima', anime2: 'Chainsaw Man'} , {name2: 'Power', anime2: 'Chainsaw Man'} , {name2: 'Setsuna F. Seiei', anime2: 'Mobile Suit Gundam 00'} ,{name2: 'Nico Yazawa', anime2: 'Love Live! School Idol Project'}, {name2: 'Ophelia', anime2: 'Claymore'}, {name2: 'Gintoki Sakata', anime2: 'Gintama'}, {name2: 'Sohma Rin', anime2: 'Fruits Basket'}, {name2: 'Iruka Umino', anime2: 'Naruto'}]


//checks to see if connection works
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

//correct or wrong answers tiles
let tileA = null
let tileB = null
let tileC = null
let tileD = null

let placementLogic = [placement1, placement2, placement3, placement4] 
let placementLogic2 =[placementA,placementB,placementC,placementD]


//to move around correct answer
function placementSelector(){
    let x = Math.floor((Math.random()*4))
    let randomPlacement= x
    
    return placementLogic[randomPlacement] 


} 

//used to generate a fake answer
function randomFakeAnswer(){
  return fakeAnswers[Math.floor((Math.random()*fakeAnswers.length))]
}

// check for hp
let health = 3 
let lifeTotal = document.querySelector('#lifetotal')
lifeTotal.innerText = health + " Lives"
function lifeTaker(){
health -= 1
lifeTotal.innerText = health + " Lives"
if(health === 0){
  alert ('You lose')
  getQuestion()
  reset()
}
}

//variables for updating number of correct and showing when there the previous choice was correct
let justice = document.querySelector('#truth')
justice.innerText = 'Best of luck!'
let answer = document.querySelector('#corrects')
let addOne = 0
answer.innerText = addOne + " number of corrects"

//reset function
function reset(){
  health = 3
  justice.innerText = ''
  lifeTotal.innerText = health + " Lives"
  addOne = 0
  answer.innerText = addOne + " number of corrects"
  justice.innerText = "Best of luck!"
}



//the function for adding up when correct answer is clicked
function addUp(){
  addOne += 1
  answer.innerText = addOne + " number of corrects"
  if (addOne === 10){
    alert('Winner')
    reset()
  }
}

//correct answer tile logic
function correct(tile){
  if (tile === true ){
  justice.innerText = 'Previous choice: Correct'
  console.log( 'correct choice')
  addUp()
  }else{
  justice.innerText = 'Previous choice: Incorrect'
  console.log( 'nope')
  lifeTaker()

}
}


//This function populates right and wrong answer as well as includes lifetaker and addup. Reset is nested in for win condition or lose condition. Correct(tile) function is also nested in to shuffle around the answer tile and wrong anwer tile when a button is clicked. 

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
    fakeCharacterA.innerText = getFakeAnime.name2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.anime2
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
    fakeCharacterA.innerText = getFakeAnime.name2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.anime2
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
    tileD = false


  

  }else if(character === placementD && animeTitle === placement4){
    getFakeAnime = randomFakeAnswer()
    fakeCharacterA = document.querySelector('#character1')
    fakeCharacterA.innerText = getFakeAnime.name2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.anime2
    tileA = false

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


//Buttons and their logic is listed here
let go = button.addEventListener('click', ()=>{
  getQuestion()
  reset()
})
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
  
  //To do this:
  // make a function that checks strings so we cannot repeat
  // add more to the fake bank
  // inquire about button a b c d. Can we make them disappear as a trick. 



