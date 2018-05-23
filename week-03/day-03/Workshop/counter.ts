'use strict';
export { };

class Counter {
  integer: number;
  private baseValue: number;

  constructor(input?: number) {
    if (input === undefined) {
      this.integer = 0;
      this.baseValue = 0;
    } else {
      this.integer = input;
      this.baseValue = input;
    }
  }
  add(value?: number) {
    if(value === undefined) {
      this.integer +=1;
    } else {
      this.integer += value;
    }
  }
  get () {
    console.log(this.integer.toString());
  }
  reset () {
    this.integer = this.baseValue;
  }
}

let myCounter = new Counter(5);
myCounter.get();
myCounter.add();
myCounter.get();
myCounter.add(5);
myCounter.get();
myCounter.reset();
myCounter.get();