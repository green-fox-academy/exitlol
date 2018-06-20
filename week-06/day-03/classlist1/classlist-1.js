'use strict';

let content = document.querySelectorAll('p');

if(content[content.length-1].textContent === 'dolphin') {
  content[0].textContent = 'pear';
}

if (content[0].className === 'apple') {
  content[2].textContent = 'dog';
}

content[0].classList.add('red');

content[1].style.borderRadius = '25%';