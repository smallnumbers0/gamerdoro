document.querySelector('.hide-right').addEventListener('click', hideRightNav)
document.querySelector('.hide-left').addEventListener('click', hideLeftNav)

function hideRightNav() {
    document.querySelector('.contributors-list').classList.toggle('change')
}

function hideLeftNav() {
    document.querySelector('.link-list').classList.toggle('change')
}

// Buttons
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const breakButton = document.querySelector('#break')
const plusButton = document.querySelector('#plus')
const finishButton = document.querySelector('#finish')
const resetButton = document.querySelector('#reset')

/***************************************** CHANGE ALL FUNCTIONS TO ANONYMOUS FUNCTIONS *****************************************/

// Start Button event listener and function
startButton.addEventListener('click', startStudyTimer)

function startStudyTimer() {}

// Pause Button event listener and function
pauseButton.addEventListener('click', pauseTimer)

function pauseTimer() {}

// Break Button event listener and function
breakButton.addEventListener('click', startGameTimer)

function startGameTimer() {}

// Plus 5 event listener and function
plusButton.addEventListener('click', addFiveToTimer)

function addFiveToTimer() {}

// Finish Button event listener and function
finishButton.addEventListener('click', endTimer)

function endTimer() {}

// Reset Timer event listener and function
resetButton.addEventListener('click', resetTimer)

function resetTimer() {}