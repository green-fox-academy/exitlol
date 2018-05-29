'use strict';
import { Flora } from './flora';

class Flower extends Flora {
  color: string;
  constructor(color: string) {
    super();
    this.color = color;
  }

  needWater(): boolean {
    if (this.waterLevel < this.waterNeed) {
      return true;
    }
    return false;
  }

  water(wateringAmount: number) {
    if (this.waterLevel > this.waterNeed) {
      return `The ${this.color} flower doesn't need more water!`;
    } else {
      this.waterLevel += wateringAmount * 0.75;
    }
  }
}
export { Flower };