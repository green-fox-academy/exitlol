'use strict';

const myForm = document.querySelector('form');
const buttons = document.querySelectorAll('button');

myForm.addEventListener('change', getChange);
let vicTheFish = {};
function getChange(event) {
  console.log(event);
  
  if (event.target.value === 'fish' && event.target.name === 'pet-select') {
     vicTheFish = {
      value: event.target.value,
      name: event.target.name
    }
  }
  buttons[1].disabled = true;
  if (event.target.name === 'pet-select' && event.target.value === 'dog' || event.target.value === 'cat') {
    sendAlert();
  } else if (event.target.name === 'choice' && event.target.value === 'yes') {
    sendAlert(); 
  } else if (vicTheFish.value === 'fish' && vicTheFish.name === 'pet-select' && event.target.name === 'choice' && event.target.value === 'no') { 
    buttons[1].disabled = false;
    buttons[1].addEventListener('click', () => alert(`Sigh, we still added you to the cat facts list`));
  }
}

function sendAlert() {
  buttons[1].disabled = false;
  buttons[1].addEventListener('click', () => alert(`Thank you, you've successfully signed up for cat facts`))   
}