export { };
'use strict';

let lineCount: number = 7;

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

let star: string = '*';

// checking number of lines
for (let i: number = lineCount; i >= 0; i--) {  
  let spaces: string = ''; 
  // counting required spaces
  for (let j: number = 0; j <= i; j++) { 
    spaces += ' '; // concatenating spaces 
  } 
  // console.log(`${spaces}${star}`);
  star += '**';
  // finding the middle spot
  if (i <= Math.floor(lineCount/2)) {
    // checking remaining lines
    for (let k: number = 0; k < Math.floor(lineCount/2); k++) {
      for(let l: number = 0; l < k; l++)
      spaces += ' ';
      // star = star.slice(k);
    }
  }
  console.log(`${spaces}${star}`);
}