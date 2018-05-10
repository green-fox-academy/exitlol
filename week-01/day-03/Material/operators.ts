let a: number = 2;
let b: number = 3;
let c: number = 0;
let inc = 0;
let multiplyResult: number = 0;
a += 10; // it's the same  as: a = a +10
console.log(a);
a -= 10;
console.log(a);
c = a / b;
console.log(c);
multiplyResult = 2 * 5;
console.log(multiplyResult);
console.log( 4 % 2 ===0); // we use the % to check the remainder 
console.log(2 ** 3); // power operator
console.log(++ inc);//adding one to inc before logging it
console.log(inc ++);//adding one to inc after logging it
console.log(-- inc);//this is the same as incrementation before
console.log(inc --);//same here

//LOGICAL OEPRATORS

console.log(true && true);
console.log( true && false);
console.log(true || false);
console.log(!true);
console.log(!false);
