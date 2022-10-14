const url = "https://animechan.vercel.app/"


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
        let character = document.querySelector('#character2')
        character.innerText = res.character
      })
}

button.addEventListener('click', getQuestion)
    
// Decided that character and anime will be A B C D
//quote will be the only thing shown on question


//need a method to swap around A B C D
//first see if different calls can be made