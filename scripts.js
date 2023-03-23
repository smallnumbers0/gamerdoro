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
let studyDuration = 50
let gameDuration = 25
let plusFiveMinutes = 5
let studyCounter = 0
let gameCounter = 0

// Buttons
const title = document.querySelector('title')
const studyButton = document.querySelector('#study')
const pauseButton = document.querySelector('#pause')
const gameButton = document.querySelector('#game')
const plusButton = document.querySelector('#plus')
const resetButton = document.querySelector('#reset')
const countdownDisplay = document.querySelector('#countdown')
const studyCount = document.querySelector('#study-count')
const gamingCount = document.querySelector('#game-count')

// Start Button event listener and function
studyButton.addEventListener('click', startStudyTimer)

function startStudyTimer() {

    // prevent start button from being clicked twice
    studyButton.setAttribute("disabled", "disabled")
    gameButton.setAttribute("disabled", "disabled")
    let totalStudyTime = studyDuration * 60
    let pause = false
    let timerInterval = setInterval(function() {

        if(pause) { //pause is false so timer is going | => line 114
            return
        }

        let displaySeconds = (totalStudyTime % 60).toString().padStart(2, '0')
        let displayMinutes = (Math.floor(totalStudyTime / 60)).toString().padStart(2, '0')


        countdownDisplay.innerHTML = `${displayMinutes}:${displaySeconds}`
        title.innerHTML = `${displayMinutes}:${displaySeconds}`

        totalStudyTime--
        
        if (totalStudyTime < 0) {
            studyCounter++
            studyCount.innerHTML = `Study Sessions: ${studyCounter}`
            title.innerHTML = "It's Game Time!!!"
            studyButton.removeAttribute('disabled')
            gameButton.removeAttribute('disabled')
            clearInterval(timerInterval)
        }

        resetButton.addEventListener('click', event => {
            if(pauseButton.innerHTML === 'Resume') {
                pauseButton.innerHTML = 'Pause'
                title.innerHTML = `Gamerdoro`
            }
            studyButton.removeAttribute('disabled')
            gameButton.removeAttribute('disabled')
            clearInterval(timerInterval)
            countdownDisplay.innerHTML = '00:00'
            title.innerHTML = `Gamerdoro`
        })
    }, 1000)

        plusButton.addEventListener('click', event => {
            totalStudyTime += plusFiveMinutes * 60
        })

        pauseButton.addEventListener('click', () => {       
                pause = !pause                         //pause turns to true 
                pauseButton.innerHTML = pause ? 'Resume' : 'Pause'
                title.innerHTML = `${displayMinutes}:${displaySeconds}`
        })
}

// Break Button event listener and function
gameButton.addEventListener('click', startGameTimer)

function startGameTimer() {

    // prevent break button from being clicked twice
    gameButton.setAttribute("disabled", "disabled")
    studyButton.setAttribute("disabled", "disabled")
    let totalGameTime = gameDuration * 60
    let pause = false
    let timerInterval = setInterval(function() {
        if(pause) { //pause is false so timer is going | => line 114
            return
        }
        let displaySeconds = (totalGameTime % 60).toString().padStart(2, '0')
        let displayMinutes = (Math.floor(totalGameTime / 60)).toString().padStart(2, '0')


        countdownDisplay.innerHTML = `${displayMinutes}:${displaySeconds}`
        title.innerHTML = `${displayMinutes}:${displaySeconds}`

        totalGameTime--
        
        if (totalGameTime < 0) {
            gameCounter++
            gamingCount.innerHTML = `Game Sessions: ${gameCounter}`
            title.innerHTML = "GAME OVER!!!"
            gameButton.removeAttribute('disabled')
            studyButton.removeAttribute('disabled')
            clearInterval(timerInterval)
        }

        resetButton.addEventListener('click', event => {
            if(pauseButton.innerHTML === 'Resume') {
                pauseButton.innerHTML = 'Pause'
                title.innerHTML = `Gamerdoro`
            }
            gameButton.removeAttribute('disabled')
            studyButton.removeAttribute('disabled')
            clearInterval(timerInterval)
            countdownDisplay.innerHTML = '00:00'
            title.innerHTML = `Gamerdoro`
        })
    }, 1000)

        plusButton.addEventListener('click', event => {
            totalGameTime += plusFiveMinutes * 60
        })

        pauseButton.addEventListener('click', () => {       
            pause = !pause                         //pause turns to true 
            pauseButton.innerHTML = pause ? 'Resume' : 'Pause'
            title.innerHTML = `${displayMinutes}:${displaySeconds}`
    })
}