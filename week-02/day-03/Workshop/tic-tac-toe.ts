export { };
'use strict';

// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.

declare function require(path: string): any; // this is needed to access JS methods in TS
let fs = require('fs');


function ticTacResult() {

}

let content = fs.readFileSync('win-x.txt', 'utf-8');
// splitting new content then mapping it through to get a 2 dimensional array
let newContent = content.split('\r\n').map(element => {
  return element.split('');
});

let counter: number = 0;
// have to check if array value is === to X || O
for (let i: number = 0; i < newContent.length; i++) {
  // console.log(newContent[i]);
  // let elementX: boolean = newContent[i].every(item => (item === 'X'));
  // let elementO: boolean = newContent[i].every(item => (item === 'O'));
  for (let j: number = 0; j < (newContent[i].length); j++) {
    if(newContent[i][j] && newContent[i-i][j] && newContent[i-i][j] === 'X') {
      console.log(`${newContent[i][j]}`);
      
    }
    // console.log(`${counter}: ${newContent[i][j]}`);
    // counter++;
  }
}

/*
console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw
*/