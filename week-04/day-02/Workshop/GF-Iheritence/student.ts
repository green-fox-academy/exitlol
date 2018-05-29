'use strict';
import {Person} from './person';

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor (name: string, age: number, gender: string, prevOrg: string, days: number) {
    super(name, age, gender);
    this.previousOrganization = prevOrg;
    this.skippedDays = days;
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
    console.log(`Days skipped so far by ${this.name}: ${this.skippedDays}`);
  }
}

