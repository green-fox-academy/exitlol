export{};
'use strict';

let a: number = 15;
let b: number = 35;
let c: number = 55;

let surfaceArea: number = (2*(a * b + a * c + b * c ));
let volume: number = (a * b * c);
console.log(`Volume: ${volume}`);
console.log(`Surface area: ${surfaceArea}`);
