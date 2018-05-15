'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
let spyGlass: string = '';

/*function containsSeven (numbers) {
  for(let i: number = 0; i < numbers.length; i++) {
    if(numbers[i] === 7) {
      spyGlass = 'Hoooraay!';
      return spyGlass;
    } else {
      spyGlass = 'Nooooo';
    }
  }
  return spyGlass;
}
*/

function containsSeven (numbers) {
  if (numbers.every(numbers => numbers !== 7)) {
    spyGlass = 'Nooooooo'
  } else {
    spyGlass = 'Yaaaaaaaaay'
  }
  return spyGlass;
}
export = containsSeven;
