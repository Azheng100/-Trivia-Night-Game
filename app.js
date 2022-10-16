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


let answer = document.querySelector('#corrects')


let justice = document.querySelector('#truth')
justice.innerText = ' '

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


function stringChecker(){}





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
  if(character === placementA && animeTitle === placement1){
    getFakeAnime2 = randomFakeAnswer()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2


    getFakeAnime3 = randomFakeAnswer()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2

    getFakeAnime4 = randomFakeAnswer()
    fakeCharacterD = document.querySelector('#character4')
    fakeCharacterD.innerText = getFakeAnime4.name2
    fakeTitleD = document.querySelector('#anime4')
    fakeTitleD.innerText = getFakeAnime4.anime2

    justice.innerText = 'Wrong'
  }else if(character === placementB && animeTitle === placement2){
    getFakeAnime = randomFakeAnswer()
    fakeCharacterA = document.querySelector('#character1')
    fakeCharacterA.innerText = getFakeAnime.anime2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.name2

    getFakeAnime3 = randomFakeAnswer()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2

    getFakeAnime4 = randomFakeAnswer()
    fakeCharacterD = document.querySelector('#character4')
    fakeCharacterD.innerText = getFakeAnime4.name2
    fakeTitleD = document.querySelector('#anime4')
    fakeTitleD.innerText = getFakeAnime4.anime2

    justice.innerText = 'Wrong'

    
  }else if (character === placementC && animeTitle === placement3){
    getFakeAnime = randomFakeAnswer()
    fakeCharacterA = document.querySelector('#character1')
    fakeCharacterA.innerText = getFakeAnime.anime2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.name2

    getFakeAnime2 = randomFakeAnswer()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2

    getFakeAnime4 = randomFakeAnswer()
    fakeCharacterD = document.querySelector('#character4')
    fakeCharacterD.innerText = getFakeAnime4.name2
    fakeTitleD = document.querySelector('#anime4')
    fakeTitleD.innerText = getFakeAnime4.anime2


    justice.innerText = 'Wrong'
  

  }else if(character === placementD && animeTitle === placement4){
    getFakeAnime = randomFakeAnswer()
    fakeCharacterA = document.querySelector('#character1')
    fakeCharacterA.innerText = getFakeAnime.anime2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.name2

    getFakeAnime2 = randomFakeAnswer()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2

    getFakeAnime3 = randomFakeAnswer()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2
    
    justice.innerText = 'Wrong'


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
  console.log ('A')
    getQuestion()
  })
  
  
  let buttonB = document.querySelector('#buttonB').addEventListener('click', ()=>{
    console.log ('B')
    getQuestion()
  })
  
  let buttonC = document.querySelector('#buttonC').addEventListener('click', ()=>{
      console.log ('C')
      getQuestion()
    })
  
  let buttonD = document.querySelector('#buttonD').addEventListener('click', ()=>{
      console.log ('D')
      getQuestion()
  })
  
    




// add a function to pick random name in a random spot. It cannot equal the placement of the answer. It cannot equal the intnertext of the answer. 

//1. make the api  all a random call for placement. 

//the buttons a b c d actually equals the answer


//separate function that tracks number of corrects 
//display wrong or right if right points++ or nothing happen 



