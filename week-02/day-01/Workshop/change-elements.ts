export{};
'use strict';

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];

numList = numList.map((arraVal, index) => {
  if (arraVal !== index+1) {
    arraVal = index+1;
  }
  return arraVal;
})
console.log(numList);