'use strict';

import{test} from 'tape';
import {letterCount} from './count-letters';

test('Simple letter test', t => {
  let word = letterCount('h');
  t.deepEqual(word, {h: 1});
  t.end();
});

test('Simple multiple letter test', t => {
  let word = letterCount('hh');
  t.deepEqual(word, {h: 2});
  t.end();
});

test('Simple complete word test', t => {
  let word = letterCount('horsecock');
  t.deepEqual(word, {h: 1, o: 2, r: 1, s: 1, e: 1, c: 2, k: 1});
  t.end();
});