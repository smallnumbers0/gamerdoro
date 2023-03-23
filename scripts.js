

document.querySelector('#nav-icon1').addEventListener('click', hideRightNav)
document.querySelector('#nav-icon2').addEventListener('click', hideLeftNav)

function hideRightNav() {
    document.querySelector('.contributors-list').classList.toggle('change')
}

function hideLeftNav() {
    document.querySelector('.link-list').classList.toggle('change')
}


document.addEventListener('DOMContentLoaded', function() {
    const navIcons = document.querySelectorAll('#nav-icon1, #nav-icon2');
    navIcons.forEach(function(navIcon) {
        navIcon.addEventListener('click', function() {
            navIcon.classList.toggle('open');
        });
    });
});



/***************************************** PARTICLE JS *****************************************/

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

let studyDuration = 0.1  //Had to change this to let. Const was preventing addFiveToTimer from adding 5 past 50 minutes
let gameDuration = 0.2
let plusFiveMinutes = 0.3
let studyCounter = 0
let gameCounter = 0

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

    // prevent start button from being clicked twice
    startButton.setAttribute("disabled", "disabled")
    breakButton.setAttribute("disabled", "disabled")
    let totalStudyTime = studyDuration * 60

    let timerInterval = setInterval(function() {
        let displaySeconds = (totalStudyTime % 60).toString().padStart(2, '0')
        let displayMinutes = (Math.floor(totalStudyTime / 60)).toString().padStart(2, '0')


        countdownDisplay.innerHTML = `${displayMinutes}:${displaySeconds}`
        title.innerHTML = `${displayMinutes}:${displaySeconds}`

        totalStudyTime--
        
        if (totalStudyTime < 0) {
            studyCounter++
            studyCount.innerHTML = `Work Sessions: ${studyCounter}`
            title.innerHTML = "It's Game Time!!!"
            startButton.removeAttribute('disabled')
            breakButton.removeAttribute('disabled')
            clearInterval(timerInterval)
        }

        resetButton.addEventListener('click', event => {
            startButton.removeAttribute('disabled')
            breakButton.removeAttribute('disabled')
            clearInterval(timerInterval)
            countdownDisplay.innerHTML = '00:00'
        })
    }, 1000)

        plusButton.addEventListener('click', event => {
            totalStudyTime += plusFiveMinutes * 60
        })
}


// Pause Button event listener and function
pauseButton.addEventListener('click', pauseTimer)

function pauseTimer() {}

// Break Button event listener and function
breakButton.addEventListener('click', startGameTimer)

function startGameTimer() {

    // prevent break button from being clicked twice
    breakButton.setAttribute("disabled", "disabled")
    startButton.setAttribute("disabled", "disabled")
    let totalBreakTime = gameDuration * 60

    let timerInterval = setInterval(function() {
        let displaySeconds = (totalBreakTime % 60).toString().padStart(2, '0')
        let displayMinutes = (Math.floor(totalBreakTime / 60)).toString().padStart(2, '0')


        countdownDisplay.innerHTML = `${displayMinutes}:${displaySeconds}`
        title.innerHTML = `${displayMinutes}:${displaySeconds}`

        totalBreakTime--
        
        if (totalBreakTime < 0) {
            gameCounter++
            gamingCount.innerHTML = `Game Sessions: ${gameCounter}`
            title.innerHTML = "GAME OVER!!!"
            breakButton.removeAttribute('disabled')
            startButton.removeAttribute('disabled')
            clearInterval(timerInterval)
        }

        resetButton.addEventListener('click', event => {
            breakButton.removeAttribute('disabled')
            startButton.removeAttribute('disabled')
            clearInterval(timerInterval)
            countdownDisplay.innerHTML = '00:00'
        })
    }, 1000)

        plusButton.addEventListener('click', event => {
            totalBreakTime += plusFiveMinutes * 60
        })

}

// Plus 5 event listener and function
// plusButton.addEventListener('click', addFiveToTimer)
// plusButton.addEventListener('click', event => {             //Added to startStudyTimer
//     totalStudyTime += plusFiveMinutes * 60
// })


// Finish Button event listener and function
finishButton.addEventListener('click', endTimer)

function endTimer() {}

// Reset Timer event listener and function
resetButton.addEventListener('click', resetTimer)

function resetTimer() {}