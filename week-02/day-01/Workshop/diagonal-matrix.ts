export{};
'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let container: any [] = [];

function matrix(size: number) {
  for (let i: number = 0; i <= size; i++) {
    container[i] = [];
    for (let j: number = 0; j <= size; j++) {
      if (i + j === size) {
        container[i][j] = 1;
      } else {
        container[i][j] = 0;
      }
    }
  }
return container;
}
console.log(matrix(4));