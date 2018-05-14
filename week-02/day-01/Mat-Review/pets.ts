'use strict';

function sayHello () {
console.log('Hello World!');
}

function greet(greetStr: string, nameString: string = 'GFA'): void {
  console.log(`${greetStr} ${nameString}!`);
}

function multiply (a: number, b: number): number {
  // let result = a * b;
  return a * b;
}
// Anonymous function
const sum = function (a: number, b:number): number {
  return a + b;
}

sayHello();
greet('Hello');
console.log(multiply(2,5));
console.log(sum(20,17));
console.log(parseInt ('2'));
console.log(parseFloat('2.3'));