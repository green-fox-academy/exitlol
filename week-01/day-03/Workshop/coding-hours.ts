'use strict';

let dailyCode: number = 6;
let weeks: number = 17;
let avarageWorkingHours: number = 52; //per week

//Hours spent coding in a semester
console.log(weeks * 5 * dailyCode);

//Average coding hours percentage per semester
console.log( (( (weeks * avarageWorkingHours) / (weeks * 168) * 100).toFixed(2)) + '%');