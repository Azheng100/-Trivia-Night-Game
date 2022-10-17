let fakeAnswers = [{name2:'Ichicgo Kurosaki', anime2: 'Bleach'}, {name2:'Hamtaro', anime2: 'Hamtaro'},{name2:'Saitama', anime2: 'One Punch man'},{name2:'Shinji Ikari', anime2: 'Neon Genesis Evangelion'}, {name2:'Edward Elric', anime2: 'Full Metal Alchemist'}, {name2:'Mai valentine', anime2: 'Yugioh Duel Monsters'}, {name2:'Goku', anime2: 'Dragon Ball Z'}, {name2:'Yamcha', anime2: 'Dragonball'}, {name2:'Paradox Brothers', anime2: 'Yugioh GX'}, {name2:'Yu Narukami', anime2: 'Persona 4: The Animation'}, {name2:'Adachi', anime2: 'Persona 4: The Golden Animation'}, {name2:'Satsuki Kiryuin', anime2: 'Kill la Kill'}, {name2:'Ryuko Matoi', anime2: 'Kill la Kill'}, {name2:'Senketsu', anime2: 'Kill la Kill'}, {name2: 'Sasuke', anime2: 'Naruto'}, {name2: 'Denji', anime2: 'Chainsaw Man'}, {name2: 'Makima', anime2: 'Chainsaw Man'} , {name2: 'Power', anime2: 'Chainsaw Man'} , {name2: 'Setsuna F. Seiei', anime2: 'Mobile Suit Gundam 00'} ,{name2: 'Nico Yazawa', anime2: 'Love Live! School Idol Project'}, {name2: 'Ophelia', anime2: 'Claymore'}, {name2: 'Gintoki Sakata', anime2: 'Gintama'}, {name2: 'Sohma Rin', anime2: 'Fruits Basket'}, {name2: 'Iruka Umino', anime2: 'Naruto'}, {name2: 'Crona' , anime2: 'Soul Eater'}, {name2: 'Guts', anime2: 'Berserk'}, {name2: 'Senjougahara Hitagi', anime2: 'Koyomimonogatari'}, {name2: 'Kaname Chidori' , anime2: 'Full Metal Panic!' }, {name2: 'Shuuko Murao', anime2: 'Ao Haru Ride' }, {name2: 'Furude Rika', anime2: 'Higurashi No Naku Koro Ni' }, {name2: 'Tsunayoshi Sawada' , anime2: 'Katekyo Hitman Reborn!' }, {name2: 'Tetsuya Kuroko', anime2:'Kuroko No Basket'}, {name2: 'Detective Conan' ,  anime2: 'Detective Conan'}, {name2: 'Yuzu Hiiragi' ,  anime2: 'Yu-Gi-Oh! Arc-V'},{name2: 'Gen Takekura' ,  anime2: 'Eyeshield 21'},{name2: 'Kino' ,  anime2: 'Kino No Tabi'},{name2: 'Yuuji Kazami' ,  anime2: 'Grisaia no Kajitsu'},{name2: 'Nobuchika Ginoza' ,  anime2: 'Psycho-Pass'},{name2: 'Gaara' ,  anime2: 'Naruto'},{name2: 'Vegeta' ,  anime2: 'Dragon Ball z'},{name2: 'Biba Amatori' ,  anime2: 'Koutetsujou no Kabaneri'},{name2: 'Ai Haibara' ,  anime2: 'Detective Conan'},{name2: 'Nishi Joichiro' ,  anime2: 'Gantz'},{name2: 'Kizaru' ,  anime2: 'One Piece'},{name2: 'Hiei' ,  anime2: 'Yu Yu Hakusho'},]


//{name2: '' ,  anime2: ''},

for (let i =0; i<fakeAnswers.length; i++){
console.log(fakeAnswers[i].name2.includes("Goku"))
}

// includes function seem to be able to sort out the name
// have logic so that answers cannot be equal

letDuplicateControl = null

// should focus strictly on fake answers. let the api call do whatever
//fake answers are always fake. Just reroll 
// focus on name and not titles


function stringChecker(){
    if (res.character === getFakeAnime.name2 || res.character === getFakeAnime2.name2 || res.character === getFakeAnime3.name2 || res.character === getFakeAnime4.name2){
        getFakeAnime = randomFakeAnswer()
        fakeCharacterA = document.querySelector('#character1')
        getFakeAnime2 = randomFakeAnswer()
        fakeCharacterB = document.querySelector('#character2')
        getFakeAnime3 = randomFakeAnswer()
        fakeCharacterC = document.querySelector('#character3')
        getFakeAnime4 = randomFakeAnswer()
        fakeCharacterD = document.querySelector('#character4')
    }
    if (fakeCharacterA === fakeCharacterB){
        fakeCharacterB = document.querySelector('#character2')
        getFakeAnime3 = randomFakeAnswer()

    }else if(fakeCharacterA === fakeCharacterC){
        getFakeAnime3 = randomFakeAnswer()
        fakeCharacterC = document.querySelector('#character3')
    }else if(fakeCharacterA === fakeCharacterD){
        getFakeAnime4 = randomFakeAnswer()
        fakeCharacterD = document.querySelector('#character4')

    }

}   


//higher order function to filter 

