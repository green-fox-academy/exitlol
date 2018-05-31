'use strict';

export function anagram (text1: string, text2:string) {
  if(text1.split('').sort().join('') === text2.split('').sort().join('')) {
    return true;
  }
  return false;
}
