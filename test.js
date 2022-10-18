fakeAnswers = [{name2:'Ichigo Kurosaki', anime2: 'Bleach'}, {name2:'Hamtaro', anime2: 'Hamtaro'},{name2:'Saitama', anime2: 'One Punch man'},{name2:'Shinji Ikari', anime2: 'Neon Genesis Evangelion'}, {name2:'Edward Elric', anime2: 'Full Metal Alchemist'}, {name2:'Mai valentine', anime2: 'Yugioh Duel Monsters'}, {name2:'Goku', anime2: 'Dragonball Z'}, {name2:'Yamcha', anime2: 'Dragonball'}, {name2:'Paradox Brothers', anime2: 'Yugioh GX'}, ]


function randomFakeAnswer(){
    return fakeAnswers[Math.floor((Math.random()*fakeAnswers.length))]
  }
  
fakeCharacterA = ''
fakeCharacterB ='' 
 fakeCharacterC = ''
 fakeCharacterD = ''

function finderMan(){
    while(fakeCharacterA === '' ||fakeCharacterB === '' || fakeCharacterC === '' || fakeCharacterD=== '' ){
        return randomFakeAnswer()
    }
}

nonsense = (finderMan())

pizza= document.querySelector('#pizza')
pizza.innertext = nonsense.name2


console.log (pizza.innertext = nonsense.name2)


console.log(finderMan().name2)



//(getFakeAnime.name2 === getFakeAnime2.name2 || fakeCharacterB.innerText === fakeCharacterC.innerText || fakeCharacterC.innerText === fakeCharacterD.innerText || fakeCharacterD.innerText === res.character ||  fakeCharacterA.innerText === fakeCharacterC.innerText || fakeCharacterA.innerText === res.character|| fakeCharacterB.innerText===res.character || fakeCharacterC.innerText=== res.character || fakeCharacterA.innerText === fakeCharacterD.innerText || fakeCharacterB.innerText === fakeCharacterD.innerText || fakeCharacterB.innerText === fakeCharacterD.innerText){



    (getFakeAnime.name2 === getFakeAnime2.name2 || getFakeAnime2.name2 === getFakeAnime3.name2 || getFakeAnime3.name2 === getFakeAnime4.name2 || getFakeAnime4.name2 === res.character || getFakeAnime.name2 === getFakeAnime3.name2 || getFakeAnime.name2 === res.character|| getFakeAnime2.name2 ===res.character || getFakeAnime3.name2=== res.character || getFakeAnime.name2 === getFakeAnime4.name2 || getFakeAnime2.name2 === getFakeAnime4.name2 || getFakeAnime2.name2 === getFakeAnime4.name2)