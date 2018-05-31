'use strict';

import {test} from 'tape';
import {anagram} from './anagram';

test('Simple single letter word', t => {
  let word = anagram('a', 'a');
  t.deepEqual(word, true);
  t.end();
});

test('Simple multiple letter word', t => {
  let word = anagram('aa', 'aa');
  t.deepEqual(word, true);
  t.end();
});

test('Multiple letter word', t => {
  let word = anagram('abbaa', 'babaa');
  t.deepEqual(word, true);
  t.end();
});

test('Multiple letter false checker', t => {
  let word = anagram('blablabla', 'babaa');
  t.deepEqual(word, false);
  t.end();
});