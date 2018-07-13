'use strict';

function drawQuestions(data) {
  const questionCont = document.querySelector('#question-cont');
  data.forEach((element) => {
    const mainQDiv = document.createElement('div');
    const questionDiv = document.createElement('div');
    const delDiv = document.createElement('div');
    const delBtn = document.createElement('button');
    
    questionCont.appendChild(mainQDiv);
    mainQDiv.classList = 'main-question';
    questionDiv.textContent = element.question;
    mainQDiv.appendChild(questionDiv);
    questionDiv.classList = 'question';
    mainQDiv.appendChild(delDiv);
    delBtn.textContent = 'Delete';
    delBtn.dataset.id = element.id;
    delDiv.appendChild(delBtn);
    delDiv.classList = 'delete';
    delBtn.addEventListener('click', (event) => {
      console.log(event.target.dataset.id);
    });
  });
}

function requestDelete(target) {
  
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let formElements = event.target.elements;
  let question = formElements.question.value;
  let answer1 = formElements.answer1.value;
  let answer2 = formElements.answer2.value;
  let answer3 = formElements.answer3.value;
  let answer4 = formElements.answer4.value;
  let correctAnswer = []
  formElements.correct.forEach((element) => {
    if (element.checked) {
      correctAnswer.push(1);
    } else {
      correctAnswer.push(0);
    }
  })
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/api/questions', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onlond = () => {
    window.location = '/questions';
  }
  xhr.send(
    JSON.stringify({
      question: question,
      answer_1: answer1,
      answer_2: answer2,
      answer_3: answer3,
      answer_4: answer4,
      is_correct_1: correctAnswer[0],
      is_correct_2: correctAnswer[1],
      is_correct_3: correctAnswer[2],
      is_correct_4: correctAnswer[3],
    })
  )
});


function loadPage() {
  const http = new XMLHttpRequest();
  http.open('GET', '/api/questions');
  http.onload = () =>{
    const response = JSON.parse(http.responseText);
    drawQuestions(response);
  }
  http.send();
}

loadPage();