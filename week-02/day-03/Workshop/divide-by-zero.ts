export{};
'use strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let baseNum: number = 10;
let failText: string = 'DivisionError - Wy would you divide by 0?';


function divideByZero (input) {
  let equasion: number = (baseNum/input);
  // console.log(equasion);  
  if(input === 0) {
    throw failText;
  } else {
    return equasion;
  }
}
try {
  console.log(divideByZero(0));

}
catch (e) {
  console.log(e)
}
