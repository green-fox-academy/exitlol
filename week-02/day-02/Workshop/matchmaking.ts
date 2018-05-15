export{};
'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];
let matchMaked: string []= [];

function makingMatches (girls, boys) {
  for (let i: number = 0; i < boys.length; i++) {
    matchMaked.push(girls[i], boys[i]);
}
for (let j: number = 0; j < matchMaked.length; j++) {
  if (matchMaked[j] === undefined) {
    matchMaked.splice(j, 1);
    }
  }
  return matchMaked;
}


console.log(makingMatches(girls, boys));
