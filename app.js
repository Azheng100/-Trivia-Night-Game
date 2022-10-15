const url = "https://animechan.vercel.app/"

//fake answers bank 
let fakeAnswers = [{name2:'Ichicgo Kurosaki', anime2: 'Bleach'}, {name2:'Hamtaro', anime2: 'Hamtaro'},{name2:'Saitama', anime2: 'One Punch man'},{name2:'Shinji Ikari', anime2: 'Neon Genesis Evangelion'}, {name2:'Edward Elric', anime2: 'Full Metal Alchemist'}, {name2:'Mai valentine', anime2: 'Yugioh Duel Monsters'}, {name2:'Goku', anime2: 'Dragonball Z'}, {name2:'Yamcha', anime2: 'Dragonball'}, {name2:'Paradox Brothers', anime2: 'Yugioh GX'}, {name2:'Yu Narukami', anime2: 'Persona 4: The Animation'}, {name2:'Adachi', anime2: 'Persona 4: The Golden Animation'}, {name2:'Satsuki Kiryuin', anime2: 'Kill la Kill'}, {name2:'Ryuko Matoi', anime2: 'Kill la Kill'}]


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
let button = document.querySelector('#nextQuestion')

async function getQuestion (){
    fetch('https://animechan.vercel.app/api/random')
      .then(res=>{
         return res.json()
      })
      .then(res=>{
        console.log (res.quote)
       let animeTitle = document.querySelector('#anime1')
        animeTitle.innerText = res.anime
        let quoteQuestion = document.querySelector('#saidQuote')
        quoteQuestion.innerText = res.quote
        let character = document.querySelector('#character1')
        character.innerText = res.character
      })
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



