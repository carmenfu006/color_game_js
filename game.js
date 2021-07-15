document.addEventListener('DOMContentLoaded', function() {
  const color = ['red', 'orange', 'green'];
  const text = ['Red', 'Orange', 'Green'];
  const btns = document.querySelectorAll('.btn');
  const timeOptions = document.querySelectorAll('input[name="time"]');
  const word = document.getElementById('word');

  let startBtn = document.querySelector('.btn-start');
  let timerDisplay = document.querySelector('.time-remaining');
  let score = document.getElementById('score');
  let count = 0;
  let timer;
  let timeRemaining;
  let disabledGame = true;

  word.style.color = 'Red'

  timeOptions.forEach(function (e) {
    e.addEventListener("change", function(event) {
      let time = event.target.value;
      timerDisplay.innerHTML = `00 : ${time}`
      startBtn.innerHTML = 'Start'
    });
  });

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
          if (e.target.value === word.style.color) {
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
    if (id('time-1').checked) {
      timeRemaining = Number(id('time-1').value);
    } else if (id('time-2').checked) {
      timeRemaining = Number(id('time-2').value);
    } else {
      timeRemaining = Number(id('time-3').value);
    }

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

  // function helper
  function id(id) {
    return document.getElementById(id)
  }
});
  