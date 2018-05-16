export{};
'use strict';

// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

declare function require(path: string): any; // this is needed to access JS methods in TS
let fs = require('fs');

function multipleLiner (path: string, word:string, number:number) {
  try {
    for (let i: number = 0; i <  number; i++) {
      fs.appendFileSync(path, word.concat('\n'));
    }
  } catch(error) {
    console.log('Oooop.\nSomething went wrong.\nPlease stand by.')
  }
}

multipleLiner('folder1/mytext.txt','You cannot kill, what you did not create!', 9);