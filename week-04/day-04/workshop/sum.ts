'use strict';

export class Sum {
  list: number[];
  result: number;

  constructor(list: any[]) {
    this.list = list;
    this.result = 0;
  }

  sum() {
    for (let i: number = 0; i < this.list.length; i++) {
      this.result += this.list[i];
    } if(this.result === NaN) {
      return null;
    } else if(this.result === 0 || this.result === null) {
      return null;
    } else if(typeof this.list[0] === 'string') {
      return `Why string thou?`;
    }
    return this.result;
  }
}

