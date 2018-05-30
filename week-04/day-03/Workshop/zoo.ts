'use strict';

abstract class Animal {
  name: string;
  age: number;


  abstract getName(): string

  abstract breed(): string

  abstract poop(): string

  abstract hasTeeth(): boolean
}

class Reptile extends Animal {
  reproduceWith: string;

  constructor(name: string) {
    super();
    this.name = name;
    this.age = 30;
    this.reproduceWith = 'eggs.';
  }

  getName(): string {
    return this.name;
  }

  breed(): string {
    return this.reproduceWith;
  }

  poop () {
    return `It's just a little turd.`
  }
  
  hasTeeth(): boolean {
    return true;
  }
}

class Bird extends Animal {
  reproduceWith: string;

  constructor(name: string) {
    super();
    this.name = name;
    this.age = 3;
    this.reproduceWith = 'eggs.';

  }

  getName(): string {
    return this.name;
  }

  breed(): string {
    return this.reproduceWith;
  }

  poop () {
    return `It's just a tiny little turd.`
  }
  
  hasTeeth(): boolean {
    return false;
  }
}

class Mammal extends Animal {
  reproduceWith: string;

  constructor(name: string) {
    super();
    this.name = name;
    this.age = 12;
    this.reproduceWith = 'pushing miniature versions out.';

  }

  getName(): string {
    return this.name;
  }

  breed(): string {
    return this.reproduceWith;
  }

  poop () {
    return `It's just a little turd.`
  }
  
  hasTeeth(): boolean {
    return true;
  }
}

let reptile = new Reptile('Crocodile');
let mammal = new Mammal('Koala');
let bird = new Bird('Parrot');

console.log('How do you breed?\n');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}
Has teeth? ${reptile.hasTeeth()}. And how big it's poop is? ${reptile.poop()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}
Has teeth? ${mammal.hasTeeth()}. And how big it's poop is? ${mammal.poop()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}
Has teeth? ${bird.hasTeeth()}. And how big it's poop is? ${bird.poop()}`);