'use strict';
import {Animal} from './zoo';

interface Flyable {
  land(): string,
  fly(): string,
  takeOff(): string,

}
abstract class Vehicle {
  type: string;
  weight: number;;
  callsign: string;
}

class Helicopter extends Vehicle implements Flyable {

  constructor(type: string, callsign: string) {
    super();
    this.type = type;
    this.callsign = callsign.toUpperCase();
  }

  takeOff(): string {
    return `${this.callsign} requesting take-off permission. Over.`;
  }

  fly(): string {
    return `${this.type} chopper is flying towards LZ. Over`;
  }

  land(): string {
    return `${this.callsign} a ${this.type} chopper requesting landing permission. Over`;
  }
}

class Bird extends Animal implements Flyable{
  reproduceWith: string;

  constructor(name: string) {
    super();
    this.name = name;
    this.age = 3;
    this.reproduceWith = 'eggs.';

  }

  takeOff (): string {
    return `${this.name} bird requestin... Oh wait. Don't need that.`;
  }
  
  fly(): string{
    return `${this.name} bird is flying so high we can't even see it.`;
  }

  land(): string {
    return `${this.name} bird is requestin landin... Goddammit!`;
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

let bird: Bird = new Bird('Duck');
let mi26: Helicopter = new Helicopter('Mi-26', 'Anti-boogey');

console.log(bird.takeOff());
console.log(bird.fly());
console.log(bird.land()+'\n');
console.log(mi26.takeOff());
console.log(mi26.fly());
console.log(mi26.land());
