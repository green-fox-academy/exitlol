'use strict';

class Sharipe {

  constructor(color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use() {
    this.inkAmount -= this.width;
  }
}

let red = new Sharipe('red', 5);


for (let i = red.inkAmount; red.inkAmount > 0; i--) {

  red.use();
  console.log(`${red.inkAmount}  -  ${i}`);
}


