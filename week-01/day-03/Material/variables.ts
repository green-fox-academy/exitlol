let myVariable: number = 10.2;
let myNewString: string = 'It\'s a string';
let myBoolean: boolean = true;
let myNewVariable = null;
let iDontHaveValue;
console.log(myVariable);
console.log(myNewString);
//Use backtick (`...´) for printing variables and such
console.log(`My variable result is ${myVariable}`);
console.log('My variable result is ' +myVariable);
/*I should not use the logging method above
because it's not on the styling guide.
Also this is a multiline comment*/
console.log(myBoolean);
console.log(myNewVariable);
// To get the type of a value use typeof like below
console.log(typeof myNewVariable);
console.log(iDontHaveValue);