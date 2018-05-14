export {};
'use strict';

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai = [3, 4, 5, 6, 7];
let sum: number = 0;

ai.map(arrayVal => {
  sum += arrayVal;
});
console.log(sum);

// another solution

const addition = (accumulator, currentValue) => accumulator + currentValue;

let newAi = ai.reduce(addition);
console.log(newAi);