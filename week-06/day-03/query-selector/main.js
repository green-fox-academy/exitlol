'use strict';

// exercise 1
let king = document.getElementById('b325');
console.log(king);

// exercise 2
let businessLamp = document.getElementsByClassName('asteroid big');
Array.from(businessLamp).forEach((e) => console.log(e));

//exercise 3
let conceitedKing = document.getElementsByClassName('asteroid');
alert(conceitedKing[0].textContent);
alert(conceitedKing[1].textContent);

// exercise 4
let noBusiness = document.getElementsByClassName('asteroid');
Array.from(noBusiness).forEach((element, index) => {
  if(index !== 2) {
    console.log(element.textContent);
  }
});