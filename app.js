const url = "https://animechan.vercel.app/"

//fake answers banks
let fakeAnswers = [{name2:'Ichigo Kurosaki', anime2: 'Bleach'}, {name2:'Hamtaro', anime2: 'Hamtaro'},{name2:'Saitama', anime2: 'One Punch man'},{name2:'Shinji Ikari', anime2: 'Neon Genesis Evangelion'}, {name2:'Edward Elric', anime2: 'Full Metal Alchemist'}, {name2:'Mai valentine', anime2: 'Yugioh Duel Monsters'}, {name2:'Goku', anime2: 'Dragon Ball Z'}, {name2:'Yamcha', anime2: 'Dragonball'}, {name2:'Paradox Brothers', anime2: 'Yugioh GX'}, {name2:'Yu Narukami', anime2: 'Persona 4: The Animation'}, {name2:'Adachi', anime2: 'Persona 4: The Golden Animation'}, {name2:'Satsuki Kiryuin', anime2: 'Kill la Kill'}, {name2:'Ryuko Matoi', anime2: 'Kill la Kill'}, {name2:'Senketsu', anime2: 'Kill la Kill'}, {name2: 'Sasuke', anime2: 'Naruto'}, {name2: 'Denji', anime2: 'Chainsaw Man'}, {name2: 'Makima', anime2: 'Chainsaw Man'} , {name2: 'Power', anime2: 'Chainsaw Man'} , {name2: 'Setsuna F. Seiei', anime2: 'Mobile Suit Gundam 00'} ]

let fakeAnswers2 = [{name2: 'Nico Yazawa', anime2: 'Love Live! School Idol Project'}, {name2: 'Ophelia', anime2: 'Claymore'}, {name2: 'Gintoki Sakata', anime2: 'Gintama'}, {name2: 'Sohma Rin', anime2: 'Fruits Basket'}, {name2: 'Iruka Umino', anime2: 'Naruto'}, {name2: 'Crona' , anime2: 'Soul Eater'}, {name2: 'Guts', anime2: 'Berserk'}, {name2: 'Senjougahara Hitagi', anime2: 'Koyomimonogatari'}, {name2: 'Kaname Chidori' , anime2: 'Full Metal Panic!' }, {name2: 'Shuuko Murao', anime2: 'Ao Haru Ride' }, {name2: 'Furude Rika', anime2: 'Higurashi No Naku Koro Ni' }, {name2: 'Tsunayoshi Sawada' , anime2: 'Katekyo Hitman Reborn!' }, {name2: 'Tetsuya Kuroko', anime2:'Kuroko No Basket'}, {name2: 'Detective Conan' ,  anime2: 'Detective Conan'}, {name2: 'Yuzu Hiiragi' ,  anime2: 'Yu-Gi-Oh! Arc-V'},{name2: 'Gen Takekura' ,  anime2: 'Eyeshield 21'},{name2: 'Kino' ,  anime2: 'Kino No Tabi'},{name2: 'Yuuji Kazami' ,  anime2: 'Grisaia no Kajitsu'},{name2: 'Nobuchika Ginoza' ,  anime2: 'Psycho-Pass'},{name2: 'Gaara' ,  anime2: 'Naruto'},{name2: 'Vegeta' ,  anime2: 'Dragon Ball z'},{name2: 'Biba Amatori' ,  anime2: 'Koutetsujou no Kabaneri'},{name2: 'Ai Haibara' ,  anime2: 'Detective Conan'},{name2: 'Nishi Joichiro' ,  anime2: 'Gantz'},{name2: 'Kizaru' ,  anime2: 'One Piece'},{name2: 'Hiei' ,  anime2: 'Yu Yu Hakusho'}, {name2: 'Gilgamesh' ,  anime2: 'Fate/zero'}, {name2: 'Zaraki Kenpachi' ,  anime2: 'Bleach'}, {name2: 'Kaori Miyazono' ,  anime2: 'Shigatsu Wa Kimi No Uso'}, {name2: 'Satoru Fujinuma' ,  anime2: 'Boku dake ga Inai Machi'}, {name2: 'Naru' ,  anime2: 'Girl Friends'}, {name2: 'Nona' ,  anime2: 'Death Parade'}, {name2: 'Soutarou Kanou' ,  anime2: 'Kaichou Wa Maid-Sama!'},{name2: 'Eren Jaeger' ,  anime2: 'Shingeki no Kyojin'},{name2: 'Takeo Gouda' ,  anime2: 'Ore Monogatari!!'},  {name2: 'Death Parade' ,  anime2: 'Death Parade'}, {name2: 'Ryuugamine Mikado' ,  anime2: 'Durarara!!'}, {name2: 'Nicholas D. Wolfwood' ,  anime2: 'Trigun'}, {name2: 'Yuuko Ichihara' ,  anime2: 'xxxHOLiC'}, {name2: 'Soichiro Arima' ,  anime2: 'His and Her Circumstances'}, {name2: 'Okita Sougo' ,  anime2: 'Gintama'}, {name2: 'Murasaki' ,  anime2: 'Hamatora: The Animation'}, {name2: 'Ogami Rei' ,  anime2: 'Code:Breaker'}, {name2: 'Ciel Phantomhive' ,  anime2: 'Kuroshitsuji'}, {name2: 'Maki Honoka' ,  anime2: 'Kiznaiver'}, {name2: 'Makishima Shougo' ,  anime2: 'Psycho-Pass'}, {name2: 'Sora' ,  anime2: 'No Game No Life'},]

let fakeAnswers3 =[{name2: 'Atsuko Chiba' ,  anime2: 'Paprika'}, {name2: 'Tenma Tsukamoto' ,  anime2: 'School Rumble'}, {name2: 'Gokou Ruri' , anime2: 'Ore No Imouto Ga Konna Ni Kawaii Wake Ga Nai'}, {name2: 'Porco Rosso' , anime2: 'Porco Rosso'}, {name2: 'Kurotsuchi Mayuri' ,  anime2: 'Bleach'}, {name2: 'Okabe Rintarou' ,  anime2: 'Steins;Gate'}, {name2: 'Kurama' ,  anime2: 'Yu Yu Hakusho'}, {name2: 'Dongtae' ,  anime2: 'Dice: The Cube That Changes Everything'}, {name2: 'Light Yagami' ,  anime2: 'Death Note'},{name2: 'Kabuto Yakushi' ,  anime2: 'Naruto'},{name2: 'Donquixote Doflamingo' ,  anime2: 'One Piece'},{name2: 'Toph Bei Fong' ,  anime2: 'Avatar: The Last Airbender'},{name2: 'Sokka' ,  anime2: 'Avatar: The Last Airbender'},{name2: 'Erza Scarlet' ,  anime2: 'Fairy Tail'},{name2: 'Mikage' ,  anime2: '07 Ghost'},{name2: 'Van Hohenheim' ,  anime2: 'Fullmetal Alchemist'},{name2: 'Kamina' ,  anime2: 'Tengen Toppa Gurren Lagann'},{name2: 'Kaneki Ken' ,  anime2: 'Tokyo Ghoul'},{name2: 'Aang' ,  anime2: 'Avatar: The Last Airbender'},{name2: 'Rin Okumura' ,  anime2: 'Ao no Exorcist'},{name2: 'Outlaw Star' ,  anime2: 'Outlaw Star'},{name2: 'Tsugumi' ,  anime2: 'Guilty Crown'},{name2: 'Nisekoi' ,  anime2: 'Tachibana Marika'},{name2: 'Yoshii Akihisa' ,  anime2: 'Baka to Test to Shoukanjuu'},{name2: 'Nara Shikamaru',anime2: 'Naruto'}]

let fakeAnswers4 = [{name2: 'Lucy' ,  anime2: 'Elfen Lied'},{name2: 'Uryuu Ishida' ,  anime2: 'Bleach'},{name2: 'Shizuku Mizutani' ,  anime2: 'Tonari No Kaibutsu-kun'},{name2: 'Ayumi Yamada' , anime2: 'Honey and Clover'},{name2: 'Kagura Mikazuchi' ,  anime2: ' Fairy Tail'},{name2: 'Nejima Yukari' ,  anime2: 'Koi to Uso'},{name2: 'Kazuma Kuwabara' ,  anime2: 'Yu Yu Hakusho'}, {name2: 'Roy Mustang' ,  anime2: 'Fullmetal Alchemist'},{name2: 'Koko Hekmatyar' ,  anime2: 'Jormungand'} ]

let reallyFakeAnswer = [{name3:'Claude Von Reigan', anime3: 'Fire Emblem Three Hope'}, {name3:'Dimitri Alexandre Blaiddyd', anime3: 'Fire Emblem Three Hope'}, {name3:'Marth', anime3: 'Fire Emblem Shadow Dragons'}, {name3:'Miorine Rembran', anime3: 'Mobile Suit Gundam the Witch from Mercury'}, {name3:'Shaddiq Zenelli', anime3: 'Mobile Suit Gundmm the Witch from Mercury'}, {name3:'Delling Rembran', anime3: 'Mobile Suit Gundmm the Witch from Mercury - Prologue'},]



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
let fakeCharacterA = null
let fakeCharacterB = null
let fakeCharacterC = null
let fakeCharacterD = null

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
function randomFakeAnswer2(){
  return fakeAnswers2[Math.floor((Math.random()*fakeAnswers2.length))]
}
function randomFakeAnswer3(){
  return fakeAnswers3[Math.floor((Math.random()*fakeAnswers3.length))]
}
function randomFakeAnswer4(){
  return fakeAnswers4[Math.floor((Math.random()*fakeAnswers4.length))]
}

// failsafe bank generator
function randomFakeAnswerZ(){
  return reallyFakeAnswer[Math.floor((Math.random()*reallyFakeAnswer.length))]
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









//This function populates right and wrong answer as well as includes lifetaker and addup. Reset is nested in for win condition or lose condition. Correct(tile) function is also nested in to shuffle around the answer tile and wrong anwer tile when a button is clicked. 

function getAnswer(res){
console.log(res)
let animeTitle = placementSelector()
animeTitle.innerText = res.anime
let quoteQuestion = document.querySelector('#saidQuote')
quoteQuestion.innerText = res.quote

  shinyFinder =randomFakeAnswerZ()
  redherring = randomFakeAnswerZ()
  cow = randomFakeAnswerZ()
  pain = randomFakeAnswerZ()


// function antiDuplicate(){
//   shinyFinder =randomFakeAnswerZ()
//   redherring = randomFakeAnswerZ()
//   cow = randomFakeAnswerZ()
//   pain = randomFakeAnswerZ()
//   while (res.character === fakeCharacterA.innerText){
//     fakeCharacterA.innerText = shinyFinder.name3
//     fakeTitleA.innerText =shinyFinder.anime3
// } console.log('duped')
//   while(res.character === fakeCharacterB.innerText){
//     fakeCharacterB.innerText = cow.name3
//     fakeTitleB.innerText =cow.anime3}
//     console.log('duped')
//   while (res.character === fakeCharacterC.innerText){
//     fakeCharacterC.innerText = redherring.name3
//     fakeTitleC.innerText =redherring.anime3}
//     console.log('duped')

//   while(res.character === fakeCharacterD.innerText){
//     fakeCharacterD.innerText = pain.name3
//     fakeTitleD.innerText =pain.anime3}
//     console.log('duped')
  
//}

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
    getFakeAnime2 =  randomFakeAnswer2()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2
    tileB = false
    
    
    getFakeAnime3 = randomFakeAnswer3()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2
    tileC = false
    
    
    getFakeAnime4 = randomFakeAnswer4()
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
   
    getFakeAnime3 = randomFakeAnswer3()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2
    tileC = false
  
    getFakeAnime4 = randomFakeAnswer4()
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
    
    getFakeAnime2 = randomFakeAnswer2()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2
    tileB= false
   

    getFakeAnime4 = randomFakeAnswer4()
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
    

    getFakeAnime2 = randomFakeAnswer2()
    fakeCharacterB = document.querySelector('#character2')
    fakeCharacterB.innerText = getFakeAnime2.name2
    fakeTitleB = document.querySelector('#anime2')
    fakeTitleB.innerText = getFakeAnime2.anime2
    tileB = false
    

    getFakeAnime3 =randomFakeAnswer3()
    fakeCharacterC = document.querySelector('#character3')
    fakeCharacterC.innerText = getFakeAnime3.name2
    fakeTitleC = document.querySelector('#anime3')
    fakeTitleC.innerText = getFakeAnime3.anime2
    tileC = false

    //  antiDuplicate()
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
  
  const btn = document.querySelector('.btn-toggle')
  btn.addEventListener('click', function() {

    document.body.classList.toggle('dark-theme');  
  })
 
  document.getElementById("app").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">
      ${formatTime(timeLeft)}
    </span>
  </div>
  `


  function formatTimeLeft(time) {
    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60);
    
    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;
    
    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    // The output in MM:SS format
    return `${minutes}:${seconds}`;
  }

  const TIME_LIMIT = 20;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;

 




