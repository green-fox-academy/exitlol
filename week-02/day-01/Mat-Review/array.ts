'use strict';

let pets: string [] = ['Morzsi', 'Pötyi', 'Csibész'];
// console.log(pets[0]);

/*
pets.push('Mancs');
console.log(pets);
console.log(pets.length);
// Getting the last item
console.log(pets[pets.length - 1]);
// pets[pets.length] = 'Vau';
console.log(pets);

pets.unshift('Vau');
console.log(pets);

const value = pets.shift();
console.log(pets);
console.log(value);

const lastValue = pets.pop();
console.log(pets);
console.log(lastValue);

// indexOf
console.log(pets.indexOf('Pötyi'));

// slice
const newPets = pets.slice(1,3);
console.log(newPets);

// splice
pets.splice(1, 0, 'Cézár');
console.log(pets);

// concat
console.log(pets.concat('Dog1', 'Dog2'));
// const array = pets.concat([]); -> use this if you want to copy an array
*/

// ForEach by hand
console.log(pets);
for (let i: number = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
// ForEach
/* pets.forEach(function(dog, index) {
  console.log(`#${index +1}: ${dog}`);
}); */

// arrow function =>

pets.forEach((dog, index) => {
  console.log(`#${index +1}: ${dog}`);
});

// map();

let helloDogs = pets.map(dog => (`Hello, ${dog}`));
console.log(helloDogs);

// filter

/*const longNames = pets.filter(function(dog) {
  return dog.length > 5;
}); */

const longNames = pets.filter(dog =>(dog.length > 5));
console.log(longNames);