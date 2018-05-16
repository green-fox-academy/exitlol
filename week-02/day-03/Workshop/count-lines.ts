export{};
'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

declare function require(path: string): any; // this is needed to access JS methods in TS
let fs = require('fs');

function readFile (fileName:string) {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  }catch(error) {
    console.log(0);
    return null;
  }
}

function doStuff(fileName) {
  let result: string = readFile(fileName);
  let lineNum = result.split('\r\n');
  console.log(`File read, lines counted.\nNumber of lines: ${lineNum.length}`);
}

doStuff('my-file.txt');