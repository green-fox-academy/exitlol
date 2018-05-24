'use strict';
export { };

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numAdder(n: number): number {
  // base case 
  if(n < 1) {
    return 0;
  } else {
  return n + numAdder(n - 1);
  }
}

console.log(numAdder(5));