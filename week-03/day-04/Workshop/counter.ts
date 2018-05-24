'use strict';
export{};

function counter(n: number) {
  // if n > 0 console log it and return a value 1 less than previous
  if(n > 0) {
    console.log(n);
    return counter(n-1);
  }
  // base case
  return n;
}

console.log(counter(10));