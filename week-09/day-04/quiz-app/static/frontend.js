'use strict';

const score = document.querySelector('p');
let scoreCount = 0;

function makeQuestion(rows) {
  score.textContent = `Score: ${scoreCount}`;
  const answerCont = document.querySelector('#answer-cont');
  rows.forEach((row) => {
    const button = document.createElement('button');
    button.textContent = row.answer;
    button.dataset.isCorrect = row.is_correct;
    answerCont.appendChild(button);
    button.addEventListener('click', (event) => {
      if (event.target.dataset.isCorrect === '1') {
        event.target.classList.add('correct');
        scoreCount += 1;
        score.textContent = `Score: ${scoreCount}`;
      } else {
        event.target.classList.add('wrong');
      }
      setTimeout(getNewQuestion, 3000);
    })
  })
  const qContainer = document.querySelector('#question-cont');
  const h3 = document.createElement('h3');
  h3.textContent = `${rows[0].question}?`;
  qContainer.appendChild(h3);
}

function getNewQuestion() {
  const http = new XMLHttpRequest();
  http.open('GET', '/game');
  window.location.href = 'http://localhost:3000';
  http.send()
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