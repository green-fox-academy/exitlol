'use strict';
export { };


// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).


function earCounter(n: number, ears: number): number {
  if (n <= 1) {
    return n * ears;
  } else {
   return ears + earCounter(n - 1, 2);
  }
}

console.log(earCounter(10, 2))