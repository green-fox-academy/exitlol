'use strict';
export{};

// Given a string, compute recursively a new string where all the 'x' chars have been removed.


function strRemover(base: string, remove: string) {
  let newStr: string = base.toLowerCase().replace(remove, '');
  if(base.indexOf(remove) === -1) {
    return newStr;
  } else {
    return strRemover(newStr, remove);
  }
}

console.log(strRemover('agasfdXaxxadxadxXadaxadadajksdx', 'x'));

