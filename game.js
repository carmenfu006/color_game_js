document.addEventListener('DOMContentLoaded', function() {
  const color = ['red', 'orange', 'green'];
  const text = ['Red', 'Orange', 'Green'];
  const btns = document.querySelectorAll('.btn');
  const word = document.getElementById('word');

  let startBtn = document.querySelector('.btn-start');
  let timerDisplay = document.querySelector('.time-remaining');
  let score = document.getElementById('score');
  let count = 0;
  let timer;
  let timeRemaining;
  let disabledGame = true;

  word.style.color = 'Red'

  startBtn.addEventListener('click', function() {
    if (disabledGame === true) {
      disabledGame = false
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
        if (disabledGame === false) {
          if (btn.value === word.style.color) {
            count++;
          } else {
            count = 0;
          }
          word.style.color = color[getRandNumber()];
          word.innerHTML = text[getRandNumber()];
  
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
    disabledGame = true;
    clearTimeout(timer);
    timerDisplay.innerHTML = `Your score is ${count}`
    startBtn.innerHTML = 'Restart'
  }
});
  