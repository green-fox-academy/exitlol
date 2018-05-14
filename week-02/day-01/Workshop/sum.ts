export{};
'use strict';

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(inNum: number):number {
  let endSum: number = 0;
  for (let i: number = 1; i <= inNum; i++) { 
    endSum += i;
  }
  return endSum;
}
console.log(sum(7));