'use strict';

const section = document.querySelector('section');




for (let i = 2; i < 101; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  let counter = 0;
  for (let j = 1; j <= parseInt(div.textContent); j++) {
    if (parseInt(div.textContent) % j === 0) {
      counter++;
    }
    if (counter === 2) {
      primer(div);
    } else {
      notPrime(div);
    }
  }
  section.appendChild(div);
}


function primer(tag) {
  tag.classList = 'prime';
}

function notPrime(tag) {
  tag.classList = 'not-prime';
}
