import cardsDataGreen from './data/green.js';
import cardsDataBrown from './data/brown.js';
import cardsDataBlue from './data/blue.js';
import ancientsData from './data/ancients.js';

const difficultyWrapper = document.querySelector('.second-wrapper')
const thirdWraper = document.querySelector('.third-wraper')
const shuffle = document.querySelector('.shuffle')
const dotgreen1 = document.querySelector('.dotgreen1')
const dotbrown1 = document.querySelector('.dotbrown1')
const dotblue1 = document.querySelector('.dotblue1')
const dotgreen2 = document.querySelector('.dotgreen2')
const dotbrown2 = document.querySelector('.dotbrown2')
const dotblue2 = document.querySelector('.dotblue2')
const dotgreen3 = document.querySelector('.dotgreen3')
const dotbrown3 = document.querySelector('.dotbrown3')
const dotblue3 = document.querySelector('.dotblue3')
const deck = document.querySelector('.deck')
const lastСard = document.querySelector('.last-card')
const stageText = document.querySelectorAll('.stage-text')

let greenCardsDataArr
let brownCardsDataArr
let blueCardsDataArr

let wichFirstCard
let levelRange
let nameAncient

function importDataCard() {
    greenCardsDataArr = Object.values(cardsDataGreen);
    brownCardsDataArr = Object.values(cardsDataBrown);
    blueCardsDataArr = Object.values(cardsDataBlue);
}

document.addEventListener('click', (event) =>{
    if (event.target.classList.contains('ancient')){
        nameAncient = event.target.dataset.ancientname
        difficultyWrapper.classList.add('active-visible');
        wichFirstCard = event.target.dataset.ancientlvl;
        stageText[0].classList.remove('text-active')
        stageText[1].classList.remove('text-active')
        stageText[2].classList.remove('text-active')
        lastСard.style.backgroundImage = `none`;
        thirdWraper.classList.remove('active-visible')
        importDataCard() 
        work()
        
    }
    if (event.target.classList.contains('difficulty')){
        shuffle.classList.add('active-visible')
        levelRange = event.target.dataset.levelrange
        stageText[0].classList.remove('text-active')
        stageText[1].classList.remove('text-active')
        stageText[2].classList.remove('text-active')
        lastСard.style.backgroundImage = `none`;
        thirdWraper.classList.remove('active-visible')
        importDataCard() 
        work2()
      }
      
})

function work(){
    console.log(`Ancient: ${nameAncient}`)
}

function suffleCards(){
    dotgreen1.textContent = ancientsData[wichFirstCard].firstStage.greenCards;
    dotbrown1.textContent = ancientsData[wichFirstCard].firstStage.brownCards;
    dotblue1.textContent = ancientsData[wichFirstCard].firstStage.blueCards;
    dotgreen2.textContent = ancientsData[wichFirstCard].secondStage.greenCards;
    dotbrown2.textContent = ancientsData[wichFirstCard].secondStage.brownCards;
    dotblue2.textContent = ancientsData[wichFirstCard].secondStage.blueCards;
    dotgreen3.textContent = ancientsData[wichFirstCard].thirdStage.greenCards;
    dotbrown3.textContent = ancientsData[wichFirstCard].thirdStage.brownCards;
    dotblue3.textContent = ancientsData[wichFirstCard].thirdStage.blueCards;
    thirdWraper.classList.add('active-visible')
    shuffle.classList.remove('active-visible')
    deck.classList.remove('active-hidden')
}
shuffle.addEventListener('click', suffleCards)

  //выборка карт при клике нарубашку
deck.addEventListener('click',() =>{
//этап ПЕРВЫЙ
    function first(){
    if(stageFirstArray.length === 0){
        return  second();
        }
    let randomNum = randomInteger(1, stageFirstArray.length)
    console.log(`Card: ${stageFirstArray[randomNum].id}, Difficulty: ${stageFirstArray[randomNum].difficulty}`)
    lastСard.style.backgroundImage = `url(${stageFirstArray[randomNum].cardFace})`;
    if(stageFirstArray[randomNum].color === 'green' && dotgreen1.textContent === '1'){
        dotgreen1.textContent = '0'
    } else if(stageFirstArray[randomNum].color === 'green' && dotgreen1.textContent === '2'){
        dotgreen1.textContent = '1'
    } else if(stageFirstArray[randomNum].color === 'green' && dotgreen1.textContent === '3'){
        dotgreen1.textContent = '2'
    } else if(stageFirstArray[randomNum].color === 'green' && dotgreen1.textContent === '4'){
        dotgreen1.textContent = '3'
    }
    if(stageFirstArray[randomNum].color === 'blue' && dotblue1.textContent === '1'){
        dotblue1.textContent = '0'
    } else if(stageFirstArray[randomNum].color === 'blue' && dotblue1.textContent === '2'){
        dotblue1.textContent = '1'
    } else if(stageFirstArray[randomNum].color === 'blue' && dotblue1.textContent === '3'){
        dotblue1.textContent = '2'
    } else if(stageFirstArray[randomNum].color === 'blue' && dotblue1.textContent === '4'){
        dotblue1.textContent = '3'
    }
    if(stageFirstArray[randomNum].color === 'brown' && dotbrown1.textContent === '1'){
        dotbrown1.textContent = '0'
    } else if(stageFirstArray[randomNum].color === 'brown' && dotbrown1.textContent === '2'){
        dotbrown1.textContent = '1'
    } else if(stageFirstArray[randomNum].color === 'brown' && dotbrown1.textContent === '3'){
        dotbrown1.textContent = '2'
    } else if(stageFirstArray[randomNum].color === 'brown' && dotbrown1.textContent === '4'){
        dotbrown1.textContent = '3'
    }
    stageFirstArray.splice(randomNum, 1)
    }
    first()
//этап ВТОРОЙ
    function second(){
        if(stageSecondtArray.length === 0){
            return  third();
            }
        let randomNum = randomInteger(1, stageSecondtArray.length)
        console.log(`Card: ${stageSecondtArray[randomNum].id}, difficulty: ${stageSecondtArray[randomNum].difficulty}`)
        lastСard.style.backgroundImage = `url(${stageSecondtArray[randomNum].cardFace})`;
        if(stageSecondtArray[randomNum].color === 'green' && dotgreen2.textContent === '1'){
            dotgreen2.textContent = '0'
        } else if(stageSecondtArray[randomNum].color === 'green' && dotgreen2.textContent === '2'){
            dotgreen2.textContent = '1'
        } else if(stageSecondtArray[randomNum].color === 'green' && dotgreen2.textContent === '3'){
            dotgreen2.textContent = '2'
        } else if(stageSecondtArray[randomNum].color === 'green' && dotgreen2.textContent === '4'){
            dotgreen2.textContent = '3'
        }
        if(stageSecondtArray[randomNum].color === 'blue' && dotblue2.textContent === '1'){
            dotblue2.textContent = '0'
        } else if(stageSecondtArray[randomNum].color === 'blue' && dotblue2.textContent === '2'){
            dotblue2.textContent = '1'
        } else if(stageSecondtArray[randomNum].color === 'blue' && dotblue2.textContent === '3'){
            dotblue2.textContent = '2'
        } else if(stageSecondtArray[randomNum].color === 'blue' && dotblue2.textContent === '4'){
            dotblue2.textContent = '3'
        }
        if(stageSecondtArray[randomNum].color === 'brown' && dotbrown2.textContent === '1'){
            dotbrown2.textContent = '0'
        } else if(stageSecondtArray[randomNum].color === 'brown' && dotbrown2.textContent === '2'){
            dotbrown2.textContent = '1'
        } else if(stageSecondtArray[randomNum].color === 'brown' && dotbrown2.textContent === '3'){
            dotbrown2.textContent = '2'
        } else if(stageSecondtArray[randomNum].color === 'brown' && dotbrown2.textContent === '4'){
            dotbrown2.textContent = '3'
        }
        stageSecondtArray.splice(randomNum, 1)
        }
//этап ТРЕТИЙ
        function third(){
            let randomNum = randomInteger(1, stageThirdArray.length)
            console.log(`Card: ${stageThirdArray[randomNum].id}, difficulty: ${stageThirdArray[randomNum].difficulty}`)
            lastСard.style.backgroundImage = `url(${stageThirdArray[randomNum].cardFace})`;
            if(stageThirdArray[randomNum].color === 'green' && dotgreen3.textContent === '1'){
                dotgreen3.textContent = '0'
            } else if(stageThirdArray[randomNum].color === 'green' && dotgreen3.textContent === '2'){
                dotgreen3.textContent = '1'
            } else if(stageThirdArray[randomNum].color === 'green' && dotgreen3.textContent === '3'){
                dotgreen3.textContent = '2'
            } else if(stageThirdArray[randomNum].color === 'green' && dotgreen3.textContent === '4'){
                dotgreen3.textContent = '3'
            }
            if(stageThirdArray[randomNum].color === 'blue' && dotblue3.textContent === '1'){
                dotblue3.textContent = '0'
            } else if(stageThirdArray[randomNum].color === 'blue' && dotblue3.textContent === '2'){
                dotblue3.textContent = '1'
            } else if(stageThirdArray[randomNum].color === 'blue' && dotblue3.textContent === '3'){
                dotblue3.textContent = '2'
            } else if(stageThirdArray[randomNum].color === 'blue' && dotblue3.textContent === '4'){
                dotblue3.textContent = '3'
            }
            if(stageThirdArray[randomNum].color === 'brown' && dotbrown3.textContent === '1'){
                dotbrown3.textContent = '0'
            } else if(stageThirdArray[randomNum].color === 'brown' && dotbrown3.textContent === '2'){
                dotbrown3.textContent = '1'
            } else if(stageThirdArray[randomNum].color === 'brown' && dotbrown3.textContent === '3'){
                dotbrown3.textContent = '2'
            } else if(stageThirdArray[randomNum].color === 'brown' && dotbrown3.textContent === '4'){
                dotbrown3.textContent = '3'
            }
            stageThirdArray.splice(randomNum, 1)
        }
        if(stageFirstArray.length === 0){
        stageText[0].classList.add('text-active')
        }
        if(stageSecondtArray.length === 0){
        stageText[1].classList.add('text-active')
        }
        if(stageThirdArray.length === 0){
            stageText[2].classList.add('text-active')
            deck.classList.add('active-hidden')
        }
}) 

let veryEasyGreenCards 
let veryEasyBrownCards
let veryEasyBlueCards

let greenNormal
let browmNormal
let blueNormal

let normalGreenOnly
let normalBrounOnly
let normalBlueOnly

let newCountOfNormalGreen
let newCountOfNormalBrown
let newCountOfNormalBlue

let VeryEasyGreenArray
let VeryEasyBrownArray
let VeryEasyBlueArray

let stageFirstArray
let stageSecondtArray
let stageThirdArray

function work2(){
    console.log(`Level: ${levelRange}`)

    if (levelRange == 'very-easy'){
    veryEasyGreenCards =  greenCardsDataArr.filter(function(level) {
        return level.difficulty == 'easy';
    });
    veryEasyBrownCards =  brownCardsDataArr.filter(function(level) {
        return level.difficulty == 'easy';
    });
    veryEasyBlueCards =  blueCardsDataArr.filter(function(level) {
        return level.difficulty == 'easy';
    });

    let countGreenCards = (ancientsData[wichFirstCard].firstStage.greenCards + ancientsData[wichFirstCard].secondStage.greenCards + ancientsData[wichFirstCard].thirdStage.greenCards)
    let countBrownCards = (ancientsData[wichFirstCard].firstStage.brownCards + ancientsData[wichFirstCard].secondStage.brownCards + ancientsData[wichFirstCard].thirdStage.brownCards)
    let countBlueCards = (ancientsData[wichFirstCard].firstStage.blueCards + ancientsData[wichFirstCard].secondStage.blueCards + ancientsData[wichFirstCard].thirdStage.blueCards)

    function countNormalCards(){
    greenNormal = countGreenCards - veryEasyGreenCards.length
    browmNormal = countBrownCards - veryEasyBrownCards.length
    blueNormal = countBlueCards - veryEasyBlueCards.length
    }
    countNormalCards()

    if(greenNormal > 0){
    normalGreenOnly =  greenCardsDataArr.filter(function(level) {
        return level.difficulty !== 'easy' && level.difficulty !== 'hard';
    });
    }
    if(browmNormal > 0){
    normalBrounOnly =  brownCardsDataArr.filter(function(level) {
        return level.difficulty !== 'easy' && level.difficulty !== 'hard';
    });
    }
    if(blueNormal > 0){
    normalBlueOnly =  blueCardsDataArr.filter(function(level) {
        return level.difficulty !== 'easy' && level.difficulty !== 'hard';
    });
    }
    newCountOfNormalGreen = getRandomCards(normalGreenOnly,greenNormal)
    newCountOfNormalBrown = getRandomCards(normalBrounOnly,browmNormal)
    newCountOfNormalBlue = getRandomCards(normalBlueOnly,blueNormal)

    VeryEasyGreenArray = veryEasyGreenCards.concat(newCountOfNormalGreen);
    VeryEasyBrownArray = veryEasyBrownCards.concat(newCountOfNormalBrown);
    VeryEasyBlueArray = veryEasyBlueCards.concat(newCountOfNormalBlue);
    }

    let easyGreenCards
    let easyBrownCards
    let easyBlueCards
    if (levelRange == 'easy'){
        easyGreenCards =  greenCardsDataArr.filter(function(level) {
            return level.difficulty !== 'hard';
        });
        easyBrownCards =  brownCardsDataArr.filter(function(level) {
            return level.difficulty !== 'hard';
        });
        easyBlueCards =  blueCardsDataArr.filter(function(level) {
            return level.difficulty !== 'hard';
        });
    }
    let hardGreenCards
    let hardBrownCards
    let hardBlueCards
    if (levelRange == 'hard'){
    hardGreenCards =  greenCardsDataArr.filter(function(level) {
        return level.difficulty !== 'easy';
    });
    hardBrownCards =  brownCardsDataArr.filter(function(level) {
        return level.difficulty !== 'easy';
    });
    hardBlueCards =  blueCardsDataArr.filter(function(level) {
        return level.difficulty !== 'easy';
    });
    }

    let veryHardGreenCards
    let veryHardBrownCards
    let veryHardBlueCards

    let VeryHardGreenArray
    let VeryHardBrownArray
    let VeryHardBlueArray

    if (levelRange == 'very-hard'){

    veryHardGreenCards =  greenCardsDataArr.filter(function(level) {
        return level.difficulty == 'hard';
    });
    veryHardBrownCards =  brownCardsDataArr.filter(function(level) {
        return level.difficulty == 'hard';
    });
    veryHardBlueCards =  blueCardsDataArr.filter(function(level) {
        return level.difficulty == 'hard';
    });

    let countGreenCards = (ancientsData[wichFirstCard].firstStage.greenCards + ancientsData[wichFirstCard].secondStage.greenCards + ancientsData[wichFirstCard].thirdStage.greenCards)
    let countBrownCards = (ancientsData[wichFirstCard].firstStage.brownCards + ancientsData[wichFirstCard].secondStage.brownCards + ancientsData[wichFirstCard].thirdStage.brownCards)
    let countBlueCards = (ancientsData[wichFirstCard].firstStage.blueCards + ancientsData[wichFirstCard].secondStage.blueCards + ancientsData[wichFirstCard].thirdStage.blueCards)

    function countNormalCards(){
    greenNormal = countGreenCards - veryHardGreenCards.length
    browmNormal = countBrownCards - veryHardBrownCards.length
    blueNormal = countBlueCards - veryHardBlueCards.length
    }
    countNormalCards()

    if(greenNormal > 0){
    normalGreenOnly =  greenCardsDataArr.filter(function(level) {
        return level.difficulty !== 'easy' && level.difficulty !== 'hard';
    });
    }
    if(browmNormal > 0){
    normalBrounOnly =  brownCardsDataArr.filter(function(level) {
        return level.difficulty !== 'easy' && level.difficulty !== 'hard';
    });
    }
    if(blueNormal > 0){
    normalBlueOnly =  blueCardsDataArr.filter(function(level) {
        return level.difficulty !== 'easy' && level.difficulty !== 'hard';
    });
    }
    newCountOfNormalGreen = getRandomCards(normalGreenOnly,greenNormal)
    newCountOfNormalBrown = getRandomCards(normalBrounOnly,browmNormal)
    newCountOfNormalBlue = getRandomCards(normalBlueOnly,blueNormal)

    VeryHardGreenArray = veryHardGreenCards.concat(newCountOfNormalGreen);
    VeryHardBrownArray = veryHardBrownCards.concat(newCountOfNormalBrown);
    VeryHardBlueArray = veryHardBlueCards.concat(newCountOfNormalBlue);
    }

    //создаю новый массив по цветам с определенным количеством карт для каждого древнего 
    function getRandomCards(sourceArray, amount) {
        let newArray = [];
        for (let i = 0; i < amount; i++) {
            let rng = Math.floor(Math.random()*sourceArray.length)
            let random = sourceArray[rng]
            newArray.push(random);
            sourceArray.splice(rng ,1) 
        }
            return newArray
    }
    let countGreenCards = (ancientsData[wichFirstCard].firstStage.greenCards + ancientsData[wichFirstCard].secondStage.greenCards + ancientsData[wichFirstCard].thirdStage.greenCards)
    let countBrownCards = (ancientsData[wichFirstCard].firstStage.brownCards + ancientsData[wichFirstCard].secondStage.brownCards + ancientsData[wichFirstCard].thirdStage.brownCards)
    let countBlueCards = (ancientsData[wichFirstCard].firstStage.blueCards + ancientsData[wichFirstCard].secondStage.blueCards + ancientsData[wichFirstCard].thirdStage.blueCards)

    let newGreenArray
    let newBrownArray
    let newBlueArray

        if (levelRange == 'very-easy'){
            newGreenArray = getRandomCards(VeryEasyGreenArray, countGreenCards)
            newBrownArray = getRandomCards(VeryEasyBrownArray, countBrownCards)
            newBlueArray = getRandomCards(VeryEasyBlueArray, countBlueCards)
        }
        if (levelRange == 'easy'){
            newGreenArray = getRandomCards(easyGreenCards, countGreenCards)
            newBrownArray = getRandomCards(easyBrownCards, countBrownCards)
            newBlueArray = getRandomCards(easyBlueCards, countBlueCards)
        }
        if (levelRange == 'normal'){
            newGreenArray = getRandomCards(greenCardsDataArr, countGreenCards)
            newBrownArray = getRandomCards(brownCardsDataArr, countBrownCards)
            newBlueArray = getRandomCards(blueCardsDataArr, countBlueCards)
        }
        if (levelRange == 'hard'){
            newGreenArray = getRandomCards(hardGreenCards, countGreenCards)
            newBrownArray = getRandomCards(hardBrownCards, countBrownCards)
            newBlueArray = getRandomCards(hardBlueCards, countBlueCards)
        }
        if (levelRange == 'very-hard'){
            newGreenArray = getRandomCards(VeryHardGreenArray, countGreenCards)
            newBrownArray = getRandomCards(VeryHardBrownArray, countBrownCards)
            newBlueArray = getRandomCards(VeryHardBlueArray, countBlueCards)
        }
    //создаю новый массив по этапам с определенным количеством карт для каждого цвета 

    let greenFirst = getRandomCards(newGreenArray, ancientsData[wichFirstCard].firstStage.greenCards)
    let brownFirst = getRandomCards(newBrownArray, ancientsData[wichFirstCard].firstStage.brownCards)
    let blueFirst = getRandomCards(newBlueArray, ancientsData[wichFirstCard].firstStage.blueCards)

    let greenSecond = getRandomCards(newGreenArray, ancientsData[wichFirstCard].secondStage.greenCards)
    let brownSecond = getRandomCards(newBrownArray, ancientsData[wichFirstCard].secondStage.brownCards)
    let blueSecond = getRandomCards(newBlueArray, ancientsData[wichFirstCard].secondStage.blueCards)

    let greenThird = getRandomCards(newGreenArray, ancientsData[wichFirstCard].thirdStage.greenCards)
    let brownThird = getRandomCards(newBrownArray, ancientsData[wichFirstCard].thirdStage.brownCards)
    let blueThird = getRandomCards(newBlueArray, ancientsData[wichFirstCard].thirdStage.blueCards)

    //складываю массивы по цветам в одном этапе
     stageFirstArray = greenFirst.concat(brownFirst, blueFirst);
     stageSecondtArray = greenSecond.concat(brownSecond, blueSecond);
     stageThirdArray = greenThird.concat(brownThird, blueThird);
}

function randomInteger(min, max){
        return Math.floor((Math.random() * max));
    }