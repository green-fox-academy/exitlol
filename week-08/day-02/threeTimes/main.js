'use strict';

const btn = document.querySelector('button');
const pTag = document.querySelector('p');

btn.setAttribute('value', '0');

function elapsedTime () {
  let start = Date.now();

}

function counter() {
  btn.value = parseInt(btn.value) + 1;
  if (btn.value === '3') {
    pTag.textContent = 'I dare you!';
  }   
}

btn.addEventListener('click', counter);