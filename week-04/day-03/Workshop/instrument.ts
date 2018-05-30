'use strict';

abstract class Instrument {
  protected name: string;
 
  abstract play(): void;
}

abstract class StringedInstruments extends Instrument {
  numberOfStrings: number;
  sounds: string;
  strings: number;

  abstract sound(): string;

  play(): string {
    return this.sound()
  }
}


class ElectricGuitar extends StringedInstruments  {
  
  constructor(stringNum: number = 6) {
    super();
    this.sounds = 'Twang';
    this.name = 'Electric Guitar';
    this.numberOfStrings = stringNum;
  }

  sound(): string {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sounds}.`;
  }
}

class BassGuitar extends StringedInstruments  {


  constructor(stringNum: number = 4) {
    super();
    this.sounds = 'Duum-duum-duum';
    this.name = 'Bass Guitar';
    this.numberOfStrings = stringNum
  }

  sound(): string{
    return this.sounds;
  }

  play(): string {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sounds}.`;
  }
}

class Violin extends StringedInstruments {
  name: string;
  sounds: string;
  strings: number;

  constructor(stringNum: number = 4) {
    super();
    this.sounds = 'Screech';
    this.name = 'Violin';
    this.numberOfStrings = stringNum
  }

  sound(): string{
    return this.sounds;
  }

  play(): string {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sounds}.`;
  }
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.\n');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play --------------------\n');
console.log(guitar.play());
console.log(bassGuitar.play());
console.log(violin.play());
console.log('\n');

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .\n');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play --------------------\n');
console.log(guitar2.play());
console.log(bassGuitar2.play());
