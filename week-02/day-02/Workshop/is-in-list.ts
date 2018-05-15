'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let checkList: number[] = [4, 8, 12, 16];


function checkNums(listOfNumbers) {
  return checkList.map(currentElement => {
    return listOfNumbers.some(arrayVal => {
      return currentElement === arrayVal;
    });
  }).every(currentVal => {
    return currentVal === true;
  })
}

console.log(checkNums(listOfNumbers));
export = checkNums;
