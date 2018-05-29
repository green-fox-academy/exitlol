'use strict';
import { Animal } from './Animal';

class Dog extends Animal {
   constructor() {
    super(20);
  }

  public reactToCucumber(): void {
    console.log('snif-snif');
  }
}

let morzsi: Dog = new Dog();
morzsi.eat();
console.log(morzsi.isHungry());
morzsi.reactToCucumber();