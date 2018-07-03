'use strict';

const button = document.querySelector('button');
const pTag = document.querySelector('.delay-counter');

button.addEventListener('click', () => {
  let start = Date.now();
  setTimeout(() => {
    let milliSec = Date.now() - start;
    pTag.textContent =`Delayed click took: ${Math.floor(milliSec/1000)} seconds`;
  },2000);
});