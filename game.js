window.addEventListener('DOMContentLoaded', function() {
  const color = ['red', 'orange', 'green']
  const text = ['Red', 'Orange', 'Green']
  const btns = document.querySelectorAll('.btn');
  const target = document.getElementById('target');

  let startBtn = document.querySelector('.btn-start');
  let timerDisplay = document.querySelector('.time-remaining');
  let score = document.getElementById('score');
  let count = 0;
  let timer;
  let timeRemaining;
  let disableGame = true;

  target.style.color = 'Red'

  startBtn.addEventListener('click', function() {
    if (disableGame === true) {
      disableGame = false
      startBtn.innerHTML = 'Start'
      startGame()
      setTimer()
    } else {
      gameResult();
    }
  })
  
  function startGame() {
    btns.forEach(function (btn) {
      btn.addEventListener("click", function(e) {
        if (disableGame === false) {
          if (btn.value === target.style.color) {
            count++;
          } else {
            count = 0;
          }
          target.style.color = color[getRandNumber()];
          target.innerHTML = text[getRandNumber()];
  
          score.innerHTML = count;
        }
      });
    });
  }

  function getRandNumber() {
    return Math.floor(Math.random() * color.length)
  }

  function setTimer() {
    timeRemaining = 10;
    timerDisplay.innerHTML = convertTime(timeRemaining);
    startBtn.innerHTML = 'Stop'

    timer = setInterval(function () {
          timeRemaining --;

          if (timeRemaining === 0) {
            gameResult();
          } else {
            timerDisplay.innerHTML = convertTime(timeRemaining);
          }
    }, 1000)
  }

  function convertTime(time) {
    let mins = Math.floor(time/60);
    let secs = time % 60;
    if (mins < 10) {
      mins = `0${mins}`;
    }
    if (secs < 10) {
      secs = `0${secs}`;
    }
    return `${mins} : ${secs}`;
  }

  function gameResult() {
    disableGame = true;
    clearTimeout(timer);
    timerDisplay.innerHTML = `Your score is ${count}`
    startBtn.innerHTML = 'Restart'
  }
});
  