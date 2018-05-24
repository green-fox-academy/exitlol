'use strict';
export{};

// Create a recursive function called `refactorio`
// that returns it's input's factorial

function refactorio(n: number) {
  if(n === 1) {
    return 1;
  } else {
    return n * refactorio(n - 1);
  }
}

console.log(refactorio(10));