export{};
'use strict';


// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(inNum:number):number {
  let factNum: number = 1;
  for (let i: number = 1; i <= inNum; i++) {
    factNum *= i;
  }
  return factNum;
}
console.log(factorio(5));