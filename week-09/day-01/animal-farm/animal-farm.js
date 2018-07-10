'use strict';

function Animal() {
  this.hunger = 5;
  this.thirst = 5;

  this.eat = () => {
    this.hunger -= 1;
  }

  this.drink = () => {
    this.thirst -= 1;
  }

  this.play = () => {
    this.thirst -= 1;
    this.hunger -= 1;
  }
}

function Farm(slots) {
  this.slots = slots;
  this.animals = [];

  for (let i = 0; i < slots; i++) {
    this.animals.push(new Animal());
  }

  this.breed = () => {
    if (this.animals.length !== slots) {
      this.animals.push(new Animal());
    } else if (this.animals.length === slots) {
      console.log(`The farm has ${slots} living animals, we are full`);
    }
  };

  this.slaughter = () => {
    let animalFinder = () => {
      this.animals.forEach((animal) => {

      });
    let hungerFinder = () => {
       return Math.min(...animalFinder());
      }
    }
  }

  this.progress = () => {
    let rnd = Math.random();

    if (rnd <= 0.33) {
      animals.forEach((animal) => {
        animal.eat();
      });
    } else if (0.33 <= rnd && rnd <= 0.66) {
      animals.forEach((animal) => {
        animal.drink();
      });
    }
    animals.forEach((animal) => {
      animal.play();
    });
  }
}

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);
SheepFarm.slaughter();
// console.log(SheepFarm.animals); // Should log 20 Animal objects

