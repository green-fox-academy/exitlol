'use strict';
import { Person } from './person';
import { Student } from './student';
import { Mentor } from './mentor';
import { Sponsor } from './sponsor';



class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(Student) {
    this.students.push(Student);
  }

  addMentor(Mentor) {
    this.mentors.push(Mentor);
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}
// Creating the students + Mentors
let balazs: Mentor = new Mentor('Balázs', 26, 'male', 'senior');
let bence: Mentor = new Mentor('Bence', 25, 'male', 'intermadiate');
let jozsi: Student = new Student('Józsi', 23, 'male', 'BKK', 0);
let bela: Student = new Student('Béla', 33, 'male', 'Strabag', 1);
// Test cases for functionality
let people: Person[] = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let john = new Student('John Doe', 20, 'male', 'BME', 0);
people.push(john);
john.skipDays(3);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome: Cohort = new Cohort('AWESOME');
awesome.addStudent(jozsi);
awesome.addStudent(john);
awesome.addStudent(bela);
awesome.addMentor(gandhi);
awesome.addMentor(balazs);
awesome.addMentor(bence);
awesome.info();
