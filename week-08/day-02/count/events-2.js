'use strict';

const listElements = document.querySelectorAll('li');
const result = document.querySelector('.result');
const button = document.querySelector('button');
let numOfElements = 0;

function getNumbers() {
  listElements.forEach((e) => {
    numOfElements += 1;
  });
  result.textContent = `There are ${numOfElements} elements in the list above`;
}

button.addEventListener('click', getNumbers);