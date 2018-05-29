'use strict';
import { Person } from './person';

export class Sponsor extends Person {
  company: string;
  hireStudents: number;

  constructor(name: string, age: number, gender: string, company) {
    super(name, age, gender);
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a  ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hireStudents} students so far.`);
  }
  getGoal() {
    console.log(`Hire brilliant junior software developers.`);
  }

  hire() {
    this.hireStudents++;
  }
}
