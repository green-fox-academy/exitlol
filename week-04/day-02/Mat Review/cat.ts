'use strict';
import { Animal } from './Animal';

class Cat extends Animal {
  constructor() {
    super(4);
  }
  public reacToCucumber(): void {
    throw new Error('Holly shit it\'s a snake!!?!?!?!?!');
  }
}

let rose: Cat = new Cat();
rose.eat();
rose.reacToCucumber();