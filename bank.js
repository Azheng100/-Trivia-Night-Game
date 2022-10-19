let fakeAnswers = [{name2:'Ichigo Kurosaki', anime2: 'Bleach'}, {name2:'Hamtaro', anime2: 'Hamtaro'},{name2:'Saitama', anime2: 'One Punch man'},{name2:'Shinji Ikari', anime2: 'Neon Genesis Evangelion'}, {name2:'Edward Elric', anime2: 'Full Metal Alchemist'}, {name2:'Mai valentine', anime2: 'Yugioh Duel Monsters'}, {name2:'Goku', anime2: 'Dragon Ball Z'}, {name2:'Yamcha', anime2: 'Dragonball'}, {name2:'Paradox Brothers', anime2: 'Yugioh GX'}, {name2:'Yu Narukami', anime2: 'Persona 4: The Animation'}, {name2:'Adachi', anime2: 'Persona 4: The Golden Animation'}, {name2:'Satsuki Kiryuin', anime2: 'Kill la Kill'}, {name2:'Ryuko Matoi', anime2: 'Kill la Kill'}, {name2:'Senketsu', anime2: 'Kill la Kill'}, {name2: 'Sasuke', anime2: 'Naruto'}, {name2: 'Denji', anime2: 'Chainsaw Man'}, {name2: 'Makima', anime2: 'Chainsaw Man'} , {name2: 'Power', anime2: 'Chainsaw Man'} , {name2: 'Setsuna F. Seiei', anime2: 'Mobile Suit Gundam 00'} ,{name2: 'Nico Yazawa', anime2: 'Love Live! School Idol Project'}, {name2: 'Ophelia', anime2: 'Claymore'}, {name2: 'Gintoki Sakata', anime2: 'Gintama'}, {name2: 'Sohma Rin', anime2: 'Fruits Basket'}, {name2: 'Iruka Umino', anime2: 'Naruto'}, {name2: 'Crona' , anime2: 'Soul Eater'}, {name2: 'Guts', anime2: 'Berserk'}, {name2: 'Senjougahara Hitagi', anime2: 'Koyomimonogatari'}, {name2: 'Kaname Chidori' , anime2: 'Full Metal Panic!' }, {name2: 'Shuuko Murao', anime2: 'Ao Haru Ride' }, {name2: 'Furude Rika', anime2: 'Higurashi No Naku Koro Ni' }, {name2: 'Tsunayoshi Sawada' , anime2: 'Katekyo Hitman Reborn!' }, {name2: 'Tetsuya Kuroko', anime2:'Kuroko No Basket'}, {name2: 'Detective Conan' ,  anime2: 'Detective Conan'}, {name2: 'Yuzu Hiiragi' ,  anime2: 'Yu-Gi-Oh! Arc-V'},{name2: 'Gen Takekura' ,  anime2: 'Eyeshield 21'},{name2: 'Kino' ,  anime2: 'Kino No Tabi'},{name2: 'Yuuji Kazami' ,  anime2: 'Grisaia no Kajitsu'},{name2: 'Nobuchika Ginoza' ,  anime2: 'Psycho-Pass'},{name2: 'Gaara' ,  anime2: 'Naruto'},{name2: 'Vegeta' ,  anime2: 'Dragon Ball z'},{name2: 'Biba Amatori' ,  anime2: 'Koutetsujou no Kabaneri'},{name2: 'Ai Haibara' ,  anime2: 'Detective Conan'},{name2: 'Nishi Joichiro' ,  anime2: 'Gantz'},{name2: 'Kizaru' ,  anime2: 'One Piece'},{name2: 'Hiei' ,  anime2: 'Yu Yu Hakusho'}, {name2: 'Gilgamesh' ,  anime2: 'Fate/zero'}, {name2: 'Zaraki Kenpachi' ,  anime2: 'Bleach'}, {name2: 'Kaori Miyazono' ,  anime2: 'Shigatsu Wa Kimi No Uso'}, {name2: 'Satoru Fujinuma' ,  anime2: 'Boku dake ga Inai Machi'}, {name2: 'Naru' ,  anime2: 'Girl Friends'}, {name2: 'Nona' ,  anime2: 'Death Parade'}, {name2: 'Soutarou Kanou' ,  anime2: 'Kaichou Wa Maid-Sama!'},{name2: 'Eren Jaeger' ,  anime2: 'Shingeki no Kyojin'},{name2: 'Takeo Gouda' ,  anime2: 'Ore Monogatari!!'},  {name2: 'Death Parade' ,  anime2: 'Death Parade'}, {name2: 'Ryuugamine Mikado' ,  anime2: 'Durarara!!'}, {name2: 'Nicholas D. Wolfwood' ,  anime2: 'Trigun'}, {name2: 'Yuuko Ichihara' ,  anime2: 'xxxHOLiC'}, {name2: 'Soichiro Arima' ,  anime2: 'His and Her Circumstances'}, {name2: 'Okita Sougo' ,  anime2: 'Gintama'}, {name2: 'Murasaki' ,  anime2: 'Hamatora: The Animation'}, {name2: 'Ogami Rei' ,  anime2: 'Code:Breaker'}, {name2: 'Ciel Phantomhive' ,  anime2: 'Kuroshitsuji'}, {name2: 'Maki Honoka' ,  anime2: 'Kiznaiver'}, {name2: 'Makishima Shougo' ,  anime2: 'Psycho-Pass'}, {name2: 'Sora' ,  anime2: 'No Game No Life'}, {name2: 'Atsuko Chiba' ,  anime2: 'Paprika'}, {name2: 'Tenma Tsukamoto' ,  anime2: 'School Rumble'}, {name2: 'Gokou Ruri' , anime2: 'Ore No Imouto Ga Konna Ni Kawaii Wake Ga Nai'}, {name2: 'Porco Rosso' , anime2: 'Porco Rosso'}, {name2: 'Kurotsuchi Mayuri' ,  anime2: 'Bleach'}, {name2: 'Okabe Rintarou' ,  anime2: 'Steins;Gate'}, {name2: 'Kurama' ,  anime2: 'Yu Yu Hakusho'}, {name2: 'Dongtae' ,  anime2: 'Dice: The Cube That Changes Everything'}, {name2: 'Light Yagami' ,  anime2: 'Death Note'},{name2: 'Kabuto Yakushi' ,  anime2: 'Naruto'},{name2: 'Donquixote Doflamingo' ,  anime2: 'One Piece'},{name2: 'Toph Bei Fong' ,  anime2: 'Avatar: The Last Airbender'},{name2: 'Sokka' ,  anime2: 'Avatar: The Last Airbender'},{name2: 'Erza Scarlet' ,  anime2: 'Fairy Tail'},{name2: 'Mikage' ,  anime2: '07 Ghost'},{name2: 'Van Hohenheim' ,  anime2: 'Fullmetal Alchemist'},{name2: 'Kamina' ,  anime2: 'Tengen Toppa Gurren Lagann'},{name2: 'Kaneki Ken' ,  anime2: 'Tokyo Ghoul'},{name2: 'Aang' ,  anime2: 'Avatar: The Last Airbender'},{name2: 'Rin Okumura' ,  anime2: 'Ao no Exorcist'},{name2: 'Outlaw Star' ,  anime2: 'Outlaw Star'},{name2: 'Tsugumi' ,  anime2: 'Guilty Crown'},{name2: 'Nisekoi' ,  anime2: 'Tachibana Marika'},{name2: 'Yoshii Akihisa' ,  anime2: 'Baka to Test to Shoukanjuu'},{name2: 'Nara Shikamaru',anime2: 'Naruto'},{name2: 'Lucy' ,  anime2: 'Elfen Lied'},{name2: 'Uryuu Ishida' ,  anime2: 'Bleach'},{name2: 'Shizuku Mizutani' ,  anime2: 'Tonari No Kaibutsu-kun'},{name2: 'Ayumi Yamada' , anime2: 'Honey and Clover'},{name2: 'Kagura Mikazuchi' ,  anime2: ' Fairy Tail'},{name2: 'Nejima Yukari' ,  anime2: 'Koi to Uso'},{name2: 'Kazuma Kuwabara' ,  anime2: 'Yu Yu Hakusho'}, {name2: 'Roy Mustang' ,  anime2: 'Fullmetal Alchemist'},{name2: 'Koko Hekmatyar' ,  anime2: 'Jormungand'}, ]


function randomFakeAnswer(){
    return fakeAnswers[Math.floor((Math.random()*fakeAnswers.length))]
}
console.log (randomFakeAnswer())








fakeAnswers = [{name2:'Ichicgo Kurosaki', anime2: 'Bleach'}, {name2:'Hamtaro', anime2: 'Hamtaro'},{name2:'Saitama', anime2: 'One Punch man'},{name2:'Shinji Ikari', anime2: 'Neon Genesis Evangelion'}, {name2:'Edward Elric', anime2: 'Full Metal Alchemist'}, {name2:'Mai valentine', anime2: 'Yugioh Duel Monsters'}, {name2:'Goku', anime2: 'Dragonball Z'}, {name2:'Yamcha', anime2: 'Dragonball'}, {name2:'Paradox Brothers', anime2: 'Yugioh GX'}, {name2:'Yu Narukami', anime2: 'Persona 4: The Animation'}, {name2:'Adachi', anime2: 'Persona 4: The Golden Animation'}, {name2:'Satsuki Kiryuin', anime2: 'Kill la Kill'}, {name2:'Ryuko Matoi', anime2: 'Kill la Kill'}, {name2:'Senketsu', anime2: 'Kill la Kill'}, {name2: 'Sasuke', anime2: 'Naruto'}, {name2: 'Denji', anime2: 'Chainsaw Man'}, {name2: 'Makima', anime2: 'Chainsaw Man'} , {name2: 'Power', anime2: 'Chainsaw Man'} , {name2: 'Setsuna F. Seiei', anime2: 'Mobile Suit Gundam 00'} ,{name2: 'Nico Yazawa', anime2: 'Love Live! School Idol Project'}, {name2: 'Ophelia', anime2: 'Claymore'}, {name2: 'Gintoki Sakata', anime2: 'Gintama'}, {name2: 'Sohma Rin', anime2: 'Fruits Basket'}, {name2: 'Iruka Umino', anime2: 'Naruto'}]







// fakeCharacterA = document.querySelector('#character1')
  //fakeCharacterB = document.querySelector('#character2')
 // fakeCharacterC = document.querySelector('#character3')
  //fakeCharacterD = document.querySelector('#character4')

// function finderMan(){
//   while(fakeCharacterA=== fakeCharacterB || fakeCharacterB === fakeCharacterC || fakeCharacterC === fakeCharacterD || fakeCharacterD === res.character ||  fakeCharacterA === fakeCharacterC || fakeCharacterD===fakeCharacterC || fakeCharacterA === res.character || fakeCharacterB===res.character || fakeCharacterC=== res.character || fakeCharacterA === fakeCharacterD){
//     return randomFakeAnswer()
//   }
// }

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
// failsafe bank generator
function randomFakeAnswerZ(){
  return reallyFakeAnswer[Math.floor((Math.random()*reallyFakeAnswer.length))]
}



{name2:'Claude Von Reigan', anime2: 'Fire Emblem Three Hope'}, {name2:'Dimitri Alexandre Blaiddyd', anime2: 'Fire Emblem Three Hope'}, {name2:'Marth', anime2: 'Fire Emblem Shadow Dragons'}, {name2:'Miorine Rembran', anime2: 'Mobile Suit Gundam the Witch from Mercury'}, {name2:'Shaddiq Zenelli', anime2: 'Mobile Suit Gundmm the Witch from Mercury'}, {name2:'Delling Rembran', anime2: 'Mobile Suit Gundmm the Witch from Mercury - Prologue'},