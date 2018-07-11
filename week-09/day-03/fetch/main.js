'use strict';

const button = document.querySelector('button');
const container = document.querySelector('#content');

function fetchJokes() {
  fetch('http://api.icndb.com/jokes/random')
  .then(response => response.json())
  .then((data => writeJoke(data.value.joke)))
}


function writeJoke(joke) {
  const pTag = document.createElement('p');
  container.appendChild(pTag);
  pTag.textContent = joke;
}

button.addEventListener('click', fetchJokes);