'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b) {
    return a;
  } else {
    return c;
  }
};

export function median(pool: number[]): number {
  return pool[Math.floor((pool.length - 1) / 2)];
}

export function isVowel(c: string):boolean {
  let result = c.match(/[euioa]+/g);
  if(result === null) {
    return null;
  } else if(result !== null || result.length !== 0) {
    return true;
  }
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}
