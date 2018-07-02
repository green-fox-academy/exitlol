'use strict';

const test = require('tape');
const poker = require('./poker');

test('test single cards', t => {
  const p1 = ['ST', 'SQ', 'CA', 'D5', 'H6'];
  const p2 = ['C3', 'CT', 'D5', 'H6', 'SK'];

  t.equal(poker(p1, p2), 'p1');
  t.end();
});
