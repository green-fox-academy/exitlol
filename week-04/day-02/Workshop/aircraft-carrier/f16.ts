'use strict';
import { Aircraft } from './aircraft';

class F16 extends Aircraft {
  type: string;
  maxAmmo: number = 8;
  currentAmmo: number;
  baseDmg: number;

  constructor() {
    super(30);
    this.type = 'F16';
    this.currentAmmo = 0;
  }

  fight(): number {
    let totalDmg: number = 0;
    totalDmg = this.baseDmg * this.maxAmmo;
    this.maxAmmo = 0;
    return totalDmg;
    
  }

  refill(ammo: number) {
    if (this.currentAmmo < 1) {
      this.currentAmmo += this.maxAmmo;
      return ammo - this.maxAmmo;
    }
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type: ${this.type}, Ammo: ${this.currentAmmo}, Base Damage ${this.baseDmg}, All Damage: ${this.currentAmmo * this.baseDmg}`;
  }

  isPriority(): boolean {
    if (this.type === 'F35') {
      return true;
    } else {
      return false;
    }
  }
}
