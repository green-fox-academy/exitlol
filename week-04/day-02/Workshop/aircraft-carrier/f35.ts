'use strict';
import { Aircraft } from './aircraft';

class F35 extends Aircraft {
  type: string;
  maxAmmo: number;
  currentAmmo: number;
  baseDmg: number;

  constructor() {
    super(50);
    this.type = 'F35';
    this.maxAmmo = 12;
    this.currentAmmo = 0;
  }

  fight(): number {
    let totalDmg: number = 0;
    totalDmg = this.baseDmg * this.currentAmmo;
    this.currentAmmo = 0;
    return totalDmg;
    
  }

  refill(ammo: number) {
    if (this.currentAmmo < 1) {
      this.currentAmmo += ammo; //have to throw an error to counter overload
      return ammo - this.maxAmmo;
    }
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type: ${this.type}, Ammo: ${this.currentAmmo}, Base Damage ${this.baseDmg}, All Damage: ${this.currentAmmo  * this.baseDmg}`;
  }

  isPriority(): boolean {
    if (this.type === 'F35') {
      return true;
    } else {
      return false;
    }
  }
}

let f35: F35 = new F35();
console.log(f35.refill(100));
console.log(f35.getStatus())