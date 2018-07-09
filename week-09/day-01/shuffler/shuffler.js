'use strict';

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
    this.cash += amt;
    console.log(`Panama got ${amt}`)
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
    this.cash += amt;
    console.log(`Cyprus got ${amt}`)
  }
};

const Shuffler = {
  cash: 10000,
  pick: function() {
    let choices = [Panama, Cyprus];
    let rndNum = Math.random();

    if (rndNum < 0.5) {
      return choices[0].deposit(1000);
    }
    return choices[1].deposit(1000);
  }
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000