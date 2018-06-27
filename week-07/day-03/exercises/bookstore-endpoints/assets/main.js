'use strict';

const http = new XMLHttpRequest;
const host = 'http://localhost:3000';
const btn = document.querySelector('button');
const wrapper = document.querySelector('#wrapper');



http.open('GET', 'http://localhost:3000/api/book_titles', true);
http.onload = () => {
  let data = JSON.parse(http.responseText);
  const ulTag = document.createElement('ul');
  wrapper.appendChild(ulTag);
  data.titles.forEach((e) => {
    const listTag = document.createElement('li');
    ulTag.appendChild(listTag).textContent = e.book_name;
  });
}

btn.addEventListener('click', () => {
  http.send()
})