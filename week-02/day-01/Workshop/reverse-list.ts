export{};
'use strict';

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`


// Built-in function
let numList = [3, 4, 5, 6, 7];

console.log(numList.reverse());

// Other method
numList = [3, 4, 5, 6, 7];
let tempArray = [];
/* iterate for array length grab the value and pop it to the new array but in reverse */

for (let i: number = numList.length-1, j: number = 0; i >= 0; i--, j++) {
  tempArray[j] = numList[i];
}
console.log(tempArray);