'use strict';
export { };

class Teacher {

  answer () {
   return 'You are not that dumb at all!';
  }
  teach (name: Student) {
    return name.learn();
  }
}

class Student {

  learn () {
    return 'I\'m dumb, i don\'t understand stuff';
  }
  question (name: Teacher) {
    return name.answer();
  }
}

let bela = new Student();
let eva = new Teacher();
console.log(eva.teach(bela));
console.log(bela.question(eva));
