'use strict';

// Create a function that
// - takes a filename as a parameter,
// - reads a csv file which rows contains data in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happend.
// You can find such a csv file in this directory: births.csv
// If you pass births.csv to your function, the result should be 2006.

declare function require(path: string): any; // this is needed to access JS methods in TS
let fs = require('fs');


let content: string = '';
function readFile(filename: string) {
  try {
    content = fs.readFileSync(filename, 'utf-8');
    return content;

  } catch (e) {
    return e.message();
  }
}

function findDays(content: string) {
  let counts = [];
  let compare = 0;
  let mostFrequent: string;
  let years = content.match(/\d{4}/g);

  for (let i: number = 0; i < years.length; i++) {
    let date = years[i];

    if (counts[years[i]] === undefined) {
      counts[years[i]] = 1;
    } else {
      counts[years[i]]++;
    }
    if (counts[years[i]] > compare) {
      compare = counts[years[i]];
      mostFrequent = years[i];
    }
    console.log(`Years: ${years[i]} - counts:${counts[years[i]]} - Most frequent: ${mostFrequent}`)
  }
  return `The most birthdays are from: ${mostFrequent}`;
}

readFile('birthdays.csv');
console.log(findDays(content));
 