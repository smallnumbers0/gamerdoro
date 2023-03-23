

document.querySelector('.hide-right').addEventListener('click', hideRightNav)
document.querySelector('.hide-left').addEventListener('click', hideLeftNav)

function hideRightNav() {
    document.querySelector('.contributors-list').classList.toggle('change')
}

function hideLeftNav() {
    document.querySelector('.link-list').classList.toggle('change')
}

/***********PARTICLE JS*******************/

var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

/***************************************** TIMER CODE *****************************************/

// Base times

const studyDuration = 60
const gameDuration = 25
const plusFiveMinutes = 5
let studyCounter = 0
let gamingCounter = 0

// Buttons
const title = document.querySelector('title')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const breakButton = document.querySelector('#break')
const plusButton = document.querySelector('#plus')
const finishButton = document.querySelector('#finish')
const resetButton = document.querySelector('#reset')
const countdownDisplay = document.querySelector('#countdown')
const studyCount = document.querySelector('#work-count')
const gamingCount = document.querySelector('#game-count')

/***************************************** CHANGE ALL FUNCTIONS TO ANONYMOUS FUNCTIONS *****************************************/

// Start Button event listener and function
startButton.addEventListener('click', startStudyTimer)

function startStudyTimer() {
    startButton.setAttribute("disabled", "disabled")            //prevent start button from being clicked twice
    let totalStudyTime = studyDuration * 60

    let timerInterval = setInterval(function() {
        let displaySeconds = (totalStudyTime % 60).toString().padStart(2, '0')
        let displayMinutes = (Math.floor(totalStudyTime / 60)).toString().padStart(2, '0')

        countdownDisplay.innerHTML = `${displayMinutes} : ${displaySeconds}`
        title.innerHTML = `${displayMinutes} : ${displaySeconds}`

        totalStudyTime--

        if (totalStudyTime < 0) {
            studyCounter++
            studyCount.innerHTML = `Work Sessions: ${studyCounter}`
            title.innerHTML = "It's Game Time!!!"
            startButton.removeAttribute('disabled')
            clearInterval(timerInterval)
        }

        resetButton.addEventListener('click', event => {
            startButton.removeAttribute('disabled')
            clearInterval(timerInterval)
        })
    }, 1000)
}

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