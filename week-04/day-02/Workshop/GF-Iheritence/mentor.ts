'use strict';
import{ Person } from './person';

export class Mentor extends Person {
  level: string;

  constructor(name: string, age: number, gender: string, level: string) {
    super(name, age, gender);
    this.level = level;
  }

  getGoal() {
    console.log(`My goal is: Educate brilliant junior software developers.`);
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}

