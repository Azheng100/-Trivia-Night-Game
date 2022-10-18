const url = "https://animechan.vercel.app/"

//fake answers bank 
fakeAnswers = [{name2:'Ichigo Kurosaki', anime2: 'Bleach'}, {name2:'Hamtaro', anime2: 'Hamtaro'},{name2:'Saitama', anime2: 'One Punch man'},{name2:'Shinji Ikari', anime2: 'Neon Genesis Evangelion'}, {name2:'Edward Elric', anime2: 'Full Metal Alchemist'},]



//checks to see if connection works
fetch(url)
  .then(res => {
    console.log("success!", res);
  })
  .catch(err => {
    console.log("error", err);
  });

//global variables 
let button = document.querySelector('#nextQuestion')
let displayGame = document.querySelector('.grid-container3')

//global variables for updating number of correct and showing when there the previous choice was correct
let justice = document.querySelector('#truth')
justice.innerText = '頑張って ください (Please do your best)!'
let answer = document.querySelector('#corrects')
let addOne = 0
answer.innerText = addOne + " number of corrects"

//global variables for the health count
let health = 3 
let lifeTotal = document.querySelector('#lifetotal')
lifeTotal.innerText = health + " Lives"

//global variables for moving the answer choices around the 4 cell display

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


//places choices around the 4 tiles
let placementLogic = [placement1, placement2, placement3, placement4] 
let placementLogic2 =[placementA,placementB,placementC,placementD]


//hides the choices before the person presses start/reset
function displayblock3(){
  if (displayGame.style.display === 'none' || displayGame.style.display === ''){
    displayGame.style.display = 'inline-grid'
  }else{
    displayGame.style.display = 'none'
  }
}


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
function lifeTaker(){
health -= 1
lifeTotal.innerText = health + " Lives"
if(health === 0){
  alert ('You lose')
  getQuestion()
  reset()
  
}
}


//reset function
function reset(){
  health = 3
  justice.innerText = ''
  lifeTotal.innerText = health + " Lives"
  addOne = 0
  answer.innerText = addOne + " number of corrects"
  justice.innerText = "頑張る! Give it your best!"
  
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
  addUp()
  }else{
  justice.innerText = 'Previous choice: Incorrect'
  lifeTaker()

}
}
let fakeCharacterA = null
let fakeCharacterB = null
let fakeCharacterC = null
let fakeCharacterD = null




//This function populates right and wrong answer as well as includes lifetaker and addup. Reset is nested in for win condition or lose condition. Correct(tile) function is also nested in to shuffle around the answer tile and wrong anwer tile when a button is clicked. 




function getAnswer(res){
console.log(res)
let animeTitle = placementSelector()
animeTitle.innerText = res.anime
let quoteQuestion = document.querySelector('#saidQuote')
quoteQuestion.innerText = res.quote


function finderMan(){
   
    //  while(fakeCharacterA.innerText === fakeCharacterB.innerText || fakeCharacterB.innerText === fakeCharacterC.innerText || fakeCharacterC.innerText === fakeCharacterD.innerText || fakeCharacterD.innerText === res.character ||  fakeCharacterA.innerText === fakeCharacterC.innerText || fakeCharacterA.innerText === res.character|| fakeCharacterB.innerText===res.character || fakeCharacterC.innerText=== res.character || fakeCharacterA.innerText === fakeCharacterD.innerText || fakeCharacterB.innerText === fakeCharacterD.innerText || fakeCharacterB.innerText === fakeCharacterD.innerText){
    //   console.log(fakeCharacterD.innerText + 'I am D')
    //   console.log(fakeCharacterB.innerText + 'I am B')
    //   console.log(fakeCharacterA.innerText + 'I am A')
    //   console.log(fakeCharacterC + 'I am C')
        return randomFakeAnswer()
      //}
  
    
  }
// we tried splicing and finding the index
// A != B C D res
// B != A C D res
// C != A B D res
// D != A B C  res  

function duplicateTrickA(){
  if(fakeCharacterA.innerText === fakeCharacterB.innerText || fakeCharacterB.innerText === fakeCharacterC.innerText || fakeCharacterC.innerText === fakeCharacterD.innerText || fakeCharacterD.innerText === res.character ||  fakeCharacterA.innerText === fakeCharacterC.innerText || fakeCharacterA.innerText === res.character|| fakeCharacterB.innerText===res.character || fakeCharacterC.innerText=== res.character || fakeCharacterA.innerText === fakeCharacterD.innerText || fakeCharacterB.innerText === fakeCharacterD.innerText){
   
    fakeCharacterB.innerText = 'Suletta Mercury'
    fakeTitleB.innerText = 'Gundam the Witch From Mercury'
    fakeCharacterC.innerText = 'Angel'
    fakeTitleC.innerText = 'Chainsaw Man'
    fakeCharacterD.innerText = 'Anya Forger'
    fakeTitleD = 'Spy x Family '
    console.log('hamsters')
  }
}

function duplicateTrickB(){
if(fakeCharacterA.innerText === fakeCharacterB.innerText || fakeCharacterB.innerText === fakeCharacterC.innerText || fakeCharacterC.innerText === fakeCharacterD.innerText || fakeCharacterD.innerText === res.character ||  fakeCharacterA.innerText === fakeCharacterC.innerText || fakeCharacterA.innerText === res.character|| fakeCharacterB.innerText===res.character || fakeCharacterC.innerText=== res.character || fakeCharacterA.innerText === fakeCharacterD.innerText || fakeCharacterB.innerText === fakeCharacterD.innerText){
fakeCharacterA.innerText = 'Edelgard'
fakeTitleA.innerText = 'Fire Emblem Three Houses'
fakeCharacterC.innerText = 'Angel'
fakeTitleC.innerText = 'Chainsaw Man'
fakeCharacterD.innerText = 'Anya Forger'
fakeTitleD = 'Spy x Family '
console.log('hamsters')
} 
}


function duplicateTrickC(){
if(fakeCharacterA.innerText === fakeCharacterB.innerText || fakeCharacterB.innerText === fakeCharacterC.innerText || fakeCharacterC.innerText === fakeCharacterD.innerText || fakeCharacterD.innerText === res.character ||  fakeCharacterA.innerText === fakeCharacterC.innerText || fakeCharacterA.innerText === res.character|| fakeCharacterB.innerText===res.character || fakeCharacterC.innerText=== res.character || fakeCharacterA.innerText === fakeCharacterD.innerText || fakeCharacterB.innerText === fakeCharacterD.innerText){
fakeCharacterA.innerText = 'Edelgard'
fakeTitleA.innerText = 'Fire Emblem Three Houses'
fakeCharacterB.innerText = 'Suletta Mercury'
fakeTitleB.innerText = 'Gundam the Witch From Mercury'
fakeCharacterD.innerText = 'Anya Forger'
fakeTitleD = 'Spy x Family '
console.log('hamsters')
}
}

function duplicateTrickD(){
if(fakeCharacterA.innerText === fakeCharacterB.innerText || fakeCharacterB.innerText === fakeCharacterC.innerText || fakeCharacterC.innerText === fakeCharacterD.innerText || fakeCharacterD.innerText === res.character ||  fakeCharacterA.innerText === fakeCharacterC.innerText || fakeCharacterA.innerText === res.character|| fakeCharacterB.innerText===res.character || fakeCharacterC.innerText=== res.character || fakeCharacterA.innerText === fakeCharacterD.innerText || fakeCharacterB.innerText === fakeCharacterD.innerText){
  fakeCharacterA.innerText = 'Edelgard'
  fakeTitleA.innerText = 'Fire Emblem Three Houses'
  fakeCharacterB.innerText = 'Suletta Mercury'
  fakeTitleB.innerText = 'Gundam the Witch From Mercury'
  fakeCharacterC.innerText = 'Angel'
  fakeTitleC.innerText = 'Chainsaw Man'
  console.log('hamsters')
}
}


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
    getFakeAnime2 =  finderMan()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2
    tileB = false
    
    
    getFakeAnime3 = finderMan()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2
    tileC = false
    
    
    getFakeAnime4 = finderMan()
    fakeCharacterD = document.querySelector('#character4')
    fakeCharacterD.innerText = getFakeAnime4.name2
    fakeTitleD = document.querySelector('#anime4')
    fakeTitleD.innerText = getFakeAnime4.anime2
    tileD = false
    duplicateTrickA()
    
  }else if(character === placementB && animeTitle === placement2){
    
    getFakeAnime = finderMan()
    fakeCharacterA = document.querySelector('#character1')
    fakeCharacterA.innerText = getFakeAnime.name2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.anime2
    tileA = false
   
    getFakeAnime3 = finderMan()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2
    tileC = false
  
    getFakeAnime4 = finderMan()
    fakeCharacterD = document.querySelector('#character4')
    fakeCharacterD.innerText = getFakeAnime4.name2
    fakeTitleD = document.querySelector('#anime4')
    fakeTitleD.innerText = getFakeAnime4.anime2
    tileD = false
    duplicateTrickB()
    

  }else if (character === placementC && animeTitle === placement3){
    getFakeAnime = finderMan()
    fakeCharacterA = document.querySelector('#character1')
    fakeCharacterA.innerText = getFakeAnime.name2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.anime2
    tileA = false
    
    getFakeAnime2 = finderMan()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2
    tileB= false
   

    getFakeAnime4 = finderMan()
    fakeCharacterD = document.querySelector('#character4')
    fakeCharacterD.innerText = getFakeAnime4.name2
    fakeTitleD = document.querySelector('#anime4')
    fakeTitleD.innerText = getFakeAnime4.anime2
    tileD = false
  
    duplicateTrickC()


  }else if(character === placementD && animeTitle === placement4){
    getFakeAnime = finderMan()
    fakeCharacterA = document.querySelector('#character1')
    fakeCharacterA.innerText = getFakeAnime.name2
    fakeTitleA = document.querySelector('#anime1')
    fakeTitleA.innerText = getFakeAnime.anime2
    tileA = false
    

    getFakeAnime2 = finderMan()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2
    tileB = false
    

    getFakeAnime3 =finderMan()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2
    tileC = false
    duplicateTrickD()
  

  }
}


//calling the api and generates the prompt as well as 4 choices
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

//start or reset button
let go = button.addEventListener('click', ()=>{
  displayblock3()
  getQuestion()
  reset()
})


// Buttons A B C D
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
  
 
  //do another css trick by hiding the quotes also


 




