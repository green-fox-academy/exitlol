'use strict';

import {test} from 'tape';
import {PrintApple} from './apples'

test ('simple letter return equality', t => {
  let apple: PrintApple = new PrintApple();
  t.deepEqual(apple.getApple(), 'apple');
  t.end();
});
