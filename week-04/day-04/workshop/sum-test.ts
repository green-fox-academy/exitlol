'use strict';
import {test} from 'tape';
import {Sum} from './sum';

test('Empty list', t => {
  let sum: Sum = new Sum([]);
  t.deepEqual(sum.sum(), null);
  t.end();
});

test('Test with one number', t => {
  let sum: Sum = new Sum([1]);
  t.equal(sum.sum(), 1);
  t.end();
});

test('Test with two numbers', t => {
  let sum: Sum = new Sum([1, 2]);
  t.equal(sum.sum(), 3);
  t.end();
});

test('Multiple number test', t => {
  let sum: Sum = new Sum([1, 2, 3, 4, 5]);
  t.equal(sum.sum(), 15);
  t.end();
});

test('Simple null test', t => {
  let sum: Sum = new Sum([null]);
  t.equal(sum.sum(), null);
  t.end();
});

test('Simple string test', t => {
  let sum: Sum = new Sum(['1', '2']);
  t.equal(sum.sum(), `Why string thou?`);
  t.end();
});
