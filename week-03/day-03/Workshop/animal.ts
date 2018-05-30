'use strict';
export { };

class Animal {
  hunger: number;
  thirst: number;

  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }

  eat():void  {
    this.hunger -= 1;
  }
  drink(): void {
    this.thirst -= 1;
  }

  play(): void {
    this.hunger += 1;
    this.thirst += 1;
  }
}

let tiger = new Animal;
console.log(tiger.hunger);
tiger.eat();
console.log(tiger.hunger);
console.log(tiger.thirst);
tiger.drink();
console.log(tiger.thirst);
tiger.play();
console.log(tiger.hunger);
console.log(tiger.thirst);

