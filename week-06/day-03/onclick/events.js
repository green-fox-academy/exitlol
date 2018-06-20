'use strict';


const button = document.querySelector('button');
const div = document.querySelector('div');

button.onclick = () => {
  if(div.classList[0] !== 'party') {
    div.classList.add('party');
  } else {
    div.classList.remove('party');
  }
}