'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]



function drawRect(x, y, size) {
  for (let i: number = 0; i < 6; i++) {
    x += size;
    y += size;
    size+=10;
    ctx.fillStyle = '#53c237';
    ctx.fillRect(x, y, size, size);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x, y, size, size);
  }
}

drawRect(10, 10, 20);


