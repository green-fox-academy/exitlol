'use strict';
import { Flora } from './flora';

class Tree extends Flora {
  color: string;
  constructor(color: string) {
    super();
    this.color = color;
  }
  needWater(): boolean {
    if (this.waterLevel < this.waterNeed * 2) {
      return true;
    }
    return false;
  }

  water(wateringAmount: number) {
    if (this.waterLevel > this.waterNeed * 2) {
      return `The ${this.color} tree doesn't need more water!`;
    } else {
      return this.waterLevel += wateringAmount * 0.40;
    }
  }
}

export { Tree };