'use strict';

let a: number = 123;
let b: number = 526;
let tmp: number = 0; // added this for temporary usage

//Logging the base
console.log(a);
console.log(b);

tmp = a;
//console.log(tmp);  - just for debugging purposes
a = b;
console.log(a);
b = tmp;
console.log(b);
