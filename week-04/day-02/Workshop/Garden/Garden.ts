'use strict';
import {Flora} from './flora';
import {Flower} from './flower';
import {Tree} from './tree';

class Garden {
  flora: Flora[];

  constructor() {
    this.flora = [];
  }

  addFlora(flora: Flora) {
    this.flora.push(flora);
  }

  water(waterAmount: number) {
    let number: number = 0;
    this.flora.forEach((element) => {
      if(element.needWater()) {
        number++;
      }
    });
    console.log(`\nWatering with ${waterAmount}`);
    this.flora.forEach((element) => {
      if(element.needWater()) {
        element.water(waterAmount / number);
      }
    });
  }

  info() {
    this.flora.forEach((element) => {
      if(element instanceof Flower) {
        if(element.needWater()) {
          console.log(`The ${element.color} flower needs water!`);
        } else {
          console.log(`The ${element.color} flower doesn't need water!`);
        }
      } else {
        if(element.needWater()) {
          console.log(`The ${element.color} tree needs water!`);
        } else {
          console.log(`The ${element.color} tree doesn't need water!`);
        }
      }
    });
  }
}

let garden = new Garden();
garden.addFlora(new Flower('yellow'));
garden.addFlora(new Flower('blue'));
garden.addFlora(new Tree('orange'));
garden.addFlora(new Tree('purple'));
garden.info();
garden.water(40);
garden.info();
garden.water(70);
garden.info();



