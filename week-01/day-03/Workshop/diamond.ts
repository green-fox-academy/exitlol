export { };
'use strict';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount: number = 7;
let star: string = '*';

//checking the number of lines needed iterating backwards
for (let i: number = lineCount; i > 0; i--) {
  let spaces: string = '';
  for (let j: number = 0; j <= i; j++) {
    spaces += ' ';
    if (i == Math.floor(lineCount/2)){
      spaces += ' ';
      for (let n: number = Math.floor(lineCount/2); n > 0; n--)
       star = '*';
    }
  }
  console.log(`${spaces}${star}`);
  star += '**';
}