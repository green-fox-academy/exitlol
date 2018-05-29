'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function drawRect(size) {
  for (let i: number = 0; i < 58; i++) {
    ctx.fillStyle = '#53c237';
    // if you don't want to do diagonal just remove the *400/600 from below and modify the loop iteration value (58)
    ctx.strokeStyle = 'black';
    ctx.fillRect(size + i * 10, ((size + i * 10) * (400 / 600)), size, size);
    ctx.strokeRect(size + i * 10, ((size + i * 10) * (400 / 600)), size, size);
  }
}

drawRect(10);