'use strict';

const btn = document.querySelector('button');
const pTag = document.querySelector('p');

let clickTimes = 0;
let domLoaded = false;

const clicker = () => {
  if (clickTimes < 3) {
    clickTimes += 1;
  }
  if (clickTimes === 3 && domLoaded) {
    pTag.textContent = 'I dare you!';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    domLoaded = true;
  }, 5000);
});

btn.addEventListener('click', clicker);
