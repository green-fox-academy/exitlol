'use strict';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const now = new Date();
  console.log(now);
  button.disabled = true;
});