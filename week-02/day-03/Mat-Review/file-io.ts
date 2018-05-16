'use strict';

declare function require(path: string): any; // this is needed to access JS methods in TS
let fs = require('fs');


function readFromFile (filePath: string) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  }catch(error) {
    console.log(error.mesage);
    return null;
  }
}

function writeFile(filePath: string, content: string) {
  try {
    fs.writeFileSync('my-another-file.txt', content);
    console.log('File writing was successfull!');
  }catch (error) {
    console.log(error.message);
  }
}

function doSomething() {
  let result: string = readFromFile('my-text.txt');
  if (result !== null) {
    console.log(result);
    writeFile('my-new-file.txt',result);
  }
}
doSomething();


