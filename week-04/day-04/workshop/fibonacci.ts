'use strict';

export function fibo(n: any): any {
  if(typeof n === 'number') {
    if(n <= 1) {
      return 1;
    } else {
      return fibo(n - 1) + fibo (n - 2);
    }
  } else if(typeof n === 'string') {
    return null;
  } else if(n === null) {
    return null;
  } else if(n[0] !== 0 || n.includes(0)) {
    return null;
  }
}