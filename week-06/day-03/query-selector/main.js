'use strict';

// exercise 1
let king = document.querySelector('#b325');
console.log(king);

// exercise 2
let businessLamp = document.querySelectorAll('.big');
businessLamp.forEach((e) => console.log(e));

//exercise 3
let conceitedKing = document.querySelectorAll('.asteroid');
alert(conceitedKing[0].textContent);
alert(conceitedKing[1].textContent);

// exercise 4
let noBusiness = document.querySelectorAll('.asteroid');
noBusiness.forEach((element, index) => {
  if(index !== 2) {
    console.log(element.textContent);
  }
});