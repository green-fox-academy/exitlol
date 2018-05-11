export { };
'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *      4 space 1 star   * spacecount -1 per cycle
//   ***     3 space 3 star
//  *****    2 space 5 star
// *******   1 space 7 star 
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let star: string = '*';

for (let i: number = lineCount; i >= 0; i--) {  // checking number of lines
  let spaces: string = ''; // 
  for (let j: number = 0; j <= i; j++) { //
    spaces += ' '; // concatenating spaces 
  }
  console.log(`${spaces}${star}`);
  star += '**';
}