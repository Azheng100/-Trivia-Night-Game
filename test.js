let fakeAnswers = [{name2:'Ichicgo Kurosaki', anime2: 'Bleach'}, {name2:'Hamtaro', anime2: 'Hamtaro'},{name2:'Saitama', anime2: 'One Punch man'},{name2:'Shinji Ikari', anime2: 'Neon Genesis Evangelion'}, {name2:'Edward Elric', anime2: 'Full Metal Alchemist'}, {name2:'Mai valentine', anime2: 'Yugioh Duel Monsters'}, {name2:'Goku', anime2: 'Dragonball Z'}, {name2:'Yamcha', anime2: 'Dragonball'}, {name2:'Paradox Brothers', anime2: 'Yugioh GX'}, {name2:'Yu Narukami', anime2: 'Persona 4: The Animation'}, {name2:'Adachi', anime2: 'Persona 4: The Golden Animation'}, {name2:'Satsuki Kiryuin', anime2: 'Kill la Kill'}, {name2:'Ryuko Matoi', anime2: 'Kill la Kill'}, {name2:'Pain', anime2: 'Naruto'}, {name2: 'Naruto', anime2: 'Naruto'}]




function randomFakeAnswer(){
    return fakeAnswers[Math.floor((Math.random()*15))]
  }
  let getFakeAnime =randomFakeAnswer()
  let fakeCharacterA= getFakeAnime.name2
    let fakeTitleA=  getFakeAnime.anime2

let getFakeAnime2 = randomFakeAnswer()
let fakeCharacterB = getFakeAnime2.name2
let fakeTitleB = getFakeAnime2.anime2


  console.log(getFakeAnime)
  console.log(fakeCharacterA)
  console.log(fakeTitleA)

  console.log(getFakeAnime2)