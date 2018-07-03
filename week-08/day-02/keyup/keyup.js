'use strict';

const h1 = document.querySelector ('h1');

document.body.addEventListener('keyup', (e) => {
  h1.textContent = `Last pressed key is: ${e.key}`;
});
