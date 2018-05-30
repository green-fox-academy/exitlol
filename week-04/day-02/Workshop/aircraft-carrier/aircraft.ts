'use strict';

export class Aircraft {
  maxAmmo: number;
  baseDmg: number;

  constructor(damage: number) {
    this.maxAmmo = 0;
    this.baseDmg = damage;

  }

  fight(): number {
    let totalDmg: number = 0;
    this.maxAmmo = 0;
    totalDmg = this.baseDmg * this.maxAmmo;
    return totalDmg;
  }

  refill(ammo: number) {}

  getType() {}

  getStatus() {}

  isPriority() {}
}