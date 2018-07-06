'use strict';

const main = document.querySelector('#main-cont');
const host = 'http://localhost:3000';
let http = new XMLHttpRequest();

let url = '';
let title = '';

window.onload = () => {
  http.open('GET', `${host}/posts`, true);
  http.onload = () => {
    let data = JSON.parse(http.responseText);

    data.result.forEach(element => {
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
      main.appendChild(postDiv);
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
      dateDiv.textContent = `Date of creation:  ${element.timestamp} by: ${
        element.owner
      }`;
      dataDiv.appendChild(manipDiv);
      manipDiv.classList = 'manip-cont';
      manipDiv.appendChild(modifyBtn);
      modifyBtn.classList = 'modify';
      modifyBtn.textContent = 'Modify';
      manipDiv.appendChild(deleteBtn);
      deleteBtn.classList = 'modify';
      deleteBtn.textContent = 'Delete';
    });
    const modalWindow = document.createElement('div');
    const postWindow = document.createElement('div');
    const body = document.querySelector('body');
    const formDiv = document.createElement('div');
    const form = document.createElement('form');
    const newPostTitleCont = document.createElement('div');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const newPostURLCont = document.createElement('div');
    const urlLabel = document.createElement('label');
    const urlInput = document.createElement('input');
    const newPostBtnCont = document.createElement('div');
    const submitBtn = document.createElement('button');
    body.appendChild(modalWindow);
    modalWindow.classList = 'modal-cont';
    modalWindow.appendChild(postWindow);
    postWindow.classList = 'post-wind-cont';
    postWindow.appendChild(formDiv);
    formDiv.classList = 'new-post-form';
    formDiv.appendChild(form);
    form.appendChild(newPostTitleCont);
    newPostTitleCont.classList = 'new-post-input';
    newPostTitleCont.appendChild(titleLabel);
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title: ';
    newPostTitleCont.appendChild(titleInput);
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('for', 'title');
    titleInput.name = 'title';
    titleInput.id = 'title';
    titleInput.required = true;
    form.appendChild(newPostURLCont);
    newPostURLCont.classList = 'new-post-input';
    newPostURLCont.appendChild(urlLabel);
    urlLabel.setAttribute('for', 'url');
    urlLabel.textContent = 'URL: ';
    newPostURLCont.appendChild(urlInput);
    urlInput.setAttribute('type', 'text');
    urlInput.setAttribute('for', 'url');
    urlInput.name = 'url';
    urlInput.id = 'url';
    form.appendChild(newPostBtnCont);
    newPostBtnCont.appendChild(submitBtn);
    newPostBtnCont.classList = 'submit-btn';
    submitBtn.setAttribute('type', 'submit');
    submitBtn.id = 'submit';
    submitBtn.textContent = 'Submit';

    const newPostButton = document.querySelector('#new-post');

    const modal = document.querySelectorAll('.modal-cont');
    newPostButton.addEventListener('click', () => {
      modal[0].style.visibility = 'visible';
    });

    const submitForm = document.querySelector('form');
    submitForm.addEventListener('submit', e => {
      e.preventDefault();

      title = e.target.elements[0].value;
      url = e.target.elements[1].value;

      const http2 = new XMLHttpRequest();
      http2.open('POST', `${host}/posts`, true);
      http2.setRequestHeader('username', 'Anonymous');
      http2.setRequestHeader('Content-Type', 'application/json');
      console.log(`${title} - ${url}`);
      http2.onload = () => {
        window.location = '/';
      }
      http2.send(
        JSON.stringify({
          title,
          url,
        })
      );
    });

    document.addEventListener('keyup', e => {
      if (e.keyCode === 27 && modal[0].style.visibility === 'visible') {
        modal[0].style.visibility = 'hidden';
      }
    });
  };
  http.send();
};
