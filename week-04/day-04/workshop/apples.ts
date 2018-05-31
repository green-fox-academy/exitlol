'use strict';

export class PrintApple {
  name: string;

  constructor () {
    this.name = 'apple';
  }

  getApple(): string {
    return this.name;
  }
}