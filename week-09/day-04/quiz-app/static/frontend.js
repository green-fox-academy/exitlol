'use strict';

function makeQuestion(rows) {
  rows.forEach((row) => {
    const button = document.createElement('button');
    const answerCont = document.querySelector('#answer-cont');
    const score = document.querySelector('p');
    button.textContent = row.answer;
    button.dataset.isCorrect = row.is_correct;
    answerCont.appendChild(button);
    button.addEventListener('click', (event) => {
      let scoreCount = 0;
      if (event.target.dataset.isCorrect === '1') {
        event.target.classList.add('correct');
        score.textContent = `Score: ${scoreCount += 1}`;
      };
    })
  })
  const qContainer = document.querySelector('#question-cont');
  const h3 = document.createElement('h3');
  h3.textContent = `${rows[0].question}?`;
  qContainer.appendChild(h3);
}


function pageLoad() {
  const http = new XMLHttpRequest();
  http.open('GET', '/game');
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    makeQuestion(response);
  }
  http.send();
}

pageLoad();