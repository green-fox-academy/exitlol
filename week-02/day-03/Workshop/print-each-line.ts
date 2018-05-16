export{};
'use strict';

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

declare function require(path: string):any;
let fs =  require('fs');

function readFile(filePath: string) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch(error) {
    console.log(error.message);
    return null;
  }
}

function doStuff () {
  let result: string = readFile('my-file.txt');
  if (result !== null) {
    let content = result.split('\r\n').forEach(element => {
      console.log(element);
    });
  }
}

doStuff();