'use strict';
export{};

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function strReplacer(string: string) {
let newStr: string = string.replace('x','y');
  if(string.indexOf('x') === -1) {
    return newStr;
  } else {
    return strReplacer(newStr);
  }
}

console.log(strReplacer('0xXnXL5cx6NxlXxZrqYX'));
console.log(strReplacer('xxXxXXXXxXxxxxXXXXXxXXX'));