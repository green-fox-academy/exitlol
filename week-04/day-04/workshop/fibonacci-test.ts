'use strict';
import { test } from 'tape';
import { fibo } from './fibonacci';

test('simple number test', t => {
  let test = fibo(5);
  t.equal(test, 8);
  t.end();
});

test('simple number test', t => {
  let test = fibo(5);
  t.equal(test, 8);
  t.end();
});

test('simple empty array test', t => {
  let test = fibo([]);
  t.equal(test, null);
  t.end();
});

test('simple array test', t => {
  let test = fibo([0]);
  t.equal(test, null);
  t.end();
});

test('simple null test', t => {
  let test = fibo(null);
  t.equal(test, null);
  t.end();
});