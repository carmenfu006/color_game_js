window.addEventListener('DOMContentLoaded', function() {
  const color = ['red', 'orange', 'green']
  const text = ['Red', 'Orange', 'Green']
  const btns = document.querySelectorAll('.btn');
  const target = document.getElementById('target');

  let score = document.getElementById('score');
  let count = 0;
  target.style.color = 'Red'

  btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
      if (btn.value === target.style.color) {
        count++;
      } else {
        count = 0;
      }
      target.style.color = color[getRandNumber()];
      target.innerHTML = text[getRandNumber()];

      score.innerHTML = count
    });
  });
  
  function getRandNumber() {
    return Math.floor(Math.random() * color.length)
  }
});
  