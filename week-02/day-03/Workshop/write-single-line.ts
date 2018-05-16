export{};
'use strict';

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

declare function require(path: string): any; // this is needed to access JS methods in TS
let fs = require('fs');
let myName: string  = 'Sándor Bene';

function writeFile (fileName) {
    if(fileName === 'my-file.txt') {
      fs.writeFileSync(fileName, myName);
      console.log('File writing was successfull!');
    } else {
      console.log('Unable to write file: my-file.txt');
  }
}

function doStuff (myName) {
  writeFile('my-asdasdfile.txt');
}

doStuff('Sándor Bene');