import cardsDataGreen from './data/green.js';
import cardsDataBrown from './data/brown.js';
import cardsDataBlue from './data/blue.js';
import ancientsData from './data/ancients.js';

const azathothCard = document.querySelector('.azathoth')
const difficultyWrapper = document.querySelector('.second-wrapper')
const thirdWraper = document.querySelector('.third-wraper')
const normalDifficulty = document.querySelector('.normal')
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

let wichFirstCard
let isFunctionWork = false
document.addEventListener('click', (event) =>{
    if (event.target.classList.contains('azathoth')){
        wichFirstCard = 0
        difficultyWrapper.classList.add('active-visible')
        if(isFunctionWork === true){window.location.reload()}
        work()
    }
    if (event.target.classList.contains('cthulthu')){
        wichFirstCard = 1
        difficultyWrapper.classList.add('active-visible')
        if(isFunctionWork === true){window.location.reload()}
        work()
    }
    if (event.target.classList.contains('iogSothoth')){
        wichFirstCard = 2
        difficultyWrapper.classList.add('active-visible')
        if(isFunctionWork === true){window.location.reload()}
        work()
    }
    if (event.target.classList.contains('shubniggurath')){
        wichFirstCard = 3
        difficultyWrapper.classList.add('active-visible')
        if(isFunctionWork === true){window.location.reload()}
        work()
    }
})

function work(){
   
normalDifficulty.addEventListener('click', () => {
    shuffle.classList.add('active-visible')
})
isFunctionWork = true
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

//console.log(countGreenCards)
//console.log(countBrownCards)
//console.log(countBlueCards)

let newGreenArray = getRandomCards(cardsDataGreen, countGreenCards)
let newBrownArray = getRandomCards(cardsDataBrown, countBrownCards)
let newBlueArray = getRandomCards(cardsDataBlue, countBlueCards)

//создаю новый массив по этапам с определенным количеством карт для каждого цвета 
/*function getCardsForStage(sourceArray, amount) {
    let newArray = [];
    for (let i = 0; i < amount; i++) {
        let rng = Math.floor(Math.random()*sourceArray.length)
        let random = sourceArray[rng]
        newArray.push(random);
        sourceArray.splice(rng ,1) 
    }
        return newArray
}*/

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
const stageFirstArray = greenFirst.concat(brownFirst, blueFirst);
const stageSecondtArray = greenSecond.concat(brownSecond, blueSecond);
const stageThirdArray = greenThird.concat(brownThird, blueThird);

//console.log(stageFirstArray);
//console.log(stageSecondtArray);
//console.log(stageThirdArray);

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
}
shuffle.addEventListener('click', suffleCards)

function randomInteger(min, max){
    return Math.floor((Math.random() * max));
}

//выборка карт при клике нарубашку
deck.addEventListener('click',() =>{
//этап ПЕРВЫЙ
    function first(){
    if(stageFirstArray.length === 0){
        return  second();
        }
    let randomNum = randomInteger(1, stageFirstArray.length)
    console.log(stageFirstArray[randomNum].id)
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
        console.log(stageSecondtArray[randomNum].id)
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
            console.log(stageThirdArray[randomNum].id)
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
}
