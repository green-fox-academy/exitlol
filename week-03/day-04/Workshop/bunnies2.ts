'use strict';
export{};

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function earCounter(n: number) {
  let ears: number = 0;
  if(n % 2 === 0) {
    ears = 2;
  } else {
    ears = 3;
  }
  if(n < 1) {
    return n* ears;
  } else {
    return ears + earCounter(n-1);
  }
}

console.log(earCounter(5));