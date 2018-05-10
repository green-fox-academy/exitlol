export{};
'use strict';

let totalSecondsADay: number = 86400;
let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let remainingSeconds: number = (totalSecondsADay - currentSeconds - (currentMinutes * 60) - ((currentHours * 60) * 60) );
console.log(`Remaining seconds from today: ${remainingSeconds}`);

