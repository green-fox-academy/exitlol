'use strict';

const test = require('tape');
const poker = require('./poker');

test('test single cards', t => {
  const p1 = ['CT', 'CK', 'CQ', 'DA', 'H6'];
  const p2 = ['C3', 'C4', 'D7', 'H2', 'S5'];

  t.equal(poker(p1, p2), 'p1');
  t.end();
});
