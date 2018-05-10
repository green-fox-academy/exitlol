let iLikeCats: boolean = true;
let iLikeDogs: boolean = true;


if (iLikeCats && iLikeDogs) {
  console.log('I like cats and dogs!');
} else {
  console.log('I hate animals!');
}

// LOOOOOPS

let newNumber: number = 0;
for (let i: number = 0; i < 10; i++) { //statement1 runs before the loop, statement2 is the condition, statement3 is an iteration
  console.log(`${newNumber += 2}`);
}

let i: number = 0;
while (i < 10) {
  console.log(`${i}`)
  i ++; // have to increment because it'll be an infinite loop otherwise
}

do {
  console.log(`${i}`);
  i ++;
} while (i < 10)

let soemthinNew: number = 0;
switch(soemthinNew) {
  case 1:
    console.log('Hello');
    break;
  case 2:
    console.log('Chaoo');
    break;
  case 3:
    console.log('Oh noooo');
    break;
  default: 
      console.log('This is really false');
}