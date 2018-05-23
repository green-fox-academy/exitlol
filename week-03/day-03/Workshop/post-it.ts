'use strict';
export { };

class postIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(text: string, backgroundColor: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

let idea1 = new postIt('Idea 1', 'orange', 'blue');
console.log(idea1);
let awesome = new postIt('Awesome', 'pink', 'black');
console.log(awesome);
let superb = new postIt('Superb!', 'yellow', 'green');
console.log(superb);