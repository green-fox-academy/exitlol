let car = {
  brand: 'Audi',
  type: 'A6',
  color: 'blue',
  start: () => {
    console.log('Wroom- wroom');
  }
};
console.log(car);
console.log(car.type);

Object.keys(car).forEach(key => {
  console.log(`${key}: ${car[key]}`);
});

console.log(car.start());

console.log(car.hasOwnProperty('color'));
console.log(car.hasOwnProperty('CD-player'));

//////////////////////////////////////////

let objArray: any[] = [];
objArray.push(car);
objArray.push({
  brand: 'BMW',
  type: 'X6',
  color: 'red',
  start: () => {
    console.log('Wroom- wroom');
  }
});

console.log(objArray);
objArray.forEach(car => {
  console.log(`I have a(n)  ${car.brand}`);
  
})

