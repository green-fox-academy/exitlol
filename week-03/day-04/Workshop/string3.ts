'use strict';
export { };

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.



function star(s: string) {
  if(s.length <= 1) {
    return s;
  } else {
    return `${s.slice(0, 1)}*${star(s.slice(1))}`
  }
}

console.log(star('Horsecock'));
