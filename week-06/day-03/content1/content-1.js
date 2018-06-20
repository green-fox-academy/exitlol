"use strict";

let content = document.querySelectorAll('p');

content.forEach((element)=> {
  element.innerHTML = content[3].innerHTML;
})
