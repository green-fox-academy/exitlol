'use strict';
export { };

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigit(n: number): number {
  let remainder: number = n % 10;
  let sum: number = remainder;
  //  base case
  if (n >= 10) {
    sum += sumDigit(Math.floor(n / 10));
  }
  return sum;
}

console.log(sumDigit(126));

function summary(n: number): number {
  let sum: number = n % 10;
  if (n < 10) {
    return sum;
  } else {
    return sum += summary(Math.floor(n/10));
  }
}

console.log(summary(126));