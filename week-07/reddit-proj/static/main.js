'use strict';

const main = document.querySelector('#main-cont');
const host = 'http://localhost:3000'
let http = new XMLHttpRequest();

window.onload =  () => {
  http.open('GET', `${host}/posts`, true);
  http.onload = () => {
    let data = JSON.parse(http.responseText);
    console.log(data.result);
    
    data.result.forEach((element) => {
      const postDiv = document.createElement('div');
      const dataDiv = document.createElement('div');
      const scoreDiv = document.createElement('div');
      const upVote = document.createElement('div');
      const score = document.createElement('div');
      const downVote = document.createElement('div');
      const titleDiv = document.createElement('div');
      const titleLink = document.createElement('a');
      const dateDiv = document.createElement('div');
      const manipDiv = document.createElement('div');
      const modifyBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
      main.appendChild(postDiv)
      postDiv.classList = 'post-cont';
      postDiv.appendChild(scoreDiv);
      scoreDiv.classList = 'score-cont';
      scoreDiv.appendChild(upVote);
      upVote.classList = 'vote';
      upVote.innerHTML = '<i class="fas fa-angle-up fa-3x"></i>';
      scoreDiv.appendChild(score);
      score.textContent = element.score;
      score.classList = 'act-score';
      scoreDiv.appendChild(downVote);
      downVote.classList = 'vote';
      downVote.innerHTML = '<i class="fas fa-angle-down fa-3x"></i>';
      postDiv.appendChild(dataDiv);
      dataDiv.classList = 'inner-post-cont';
      dataDiv.appendChild(titleDiv);
      titleDiv.classList = 'title-cont';
      titleDiv.appendChild(titleLink);
      titleLink.href = element.url;
      titleLink.textContent = element.title;
      dataDiv.appendChild(dateDiv);
      dateDiv.classList = 'date';
      dateDiv.textContent = `Date of creation:  ${element.timestamp} by: ${element.owner}`;
      dataDiv.appendChild(manipDiv);
      manipDiv.classList = 'manip-cont';
      manipDiv.appendChild(modifyBtn);
      modifyBtn.classList = 'modify';
      modifyBtn.textContent = 'Mofidy';
      manipDiv.appendChild(deleteBtn);
      deleteBtn.classList = 'modify';
      deleteBtn.textContent = 'Delete';
    });
  }
  http.send();
}



