'use strict';

let replace = ['apple', 'banana', 'cat', 'dog'];
let list = document.querySelectorAll('li');

list.forEach((e, index)=> {
  e.textContent = replace[index];
})

let ul = document.getElementsByTagName('ul')[0];
ul.setAttribute('style', 'background-color: limegreen');

