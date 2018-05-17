'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

function drawRect () {
  for(let i: number = 0; i < 4; i ++) {
    ctx.fillStyle = 'red';
    ctx.fillRect((0+i*100), (0+i*100),(50+i*10), (50+i*10));
  }
}

drawRect();