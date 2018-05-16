export { };
'use strict';

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare function require(path: string): any; // this is needed to access JS methods in TS
let fs = require('fs');

function copyFile (file1, file2) {
  try {
    let content = fs.readFileSync(file1, 'utf-8');
    fs.writeFileSync(file2, content);
    console.log(true);
  }catch (error) {
    console.log(false);
  }
}

copyFile('my-file.txt','my-new-file.txt');