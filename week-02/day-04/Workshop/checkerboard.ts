'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function drawBoard(x: number, y: number, size: number) {
  for (let i: number = 0; i < 15; i++) {
    for (let j: number = 0; j < 15; j++) {
      if (i % 2 === j % 2) {
        ctx.fillStyle = 'black';
        ctx.fillRect(x * i, y * j, size, size);
      } else {
        ctx.fillStyle = 'white';
        ctx.fillRect(x * i, y * j, size, size);
      }
    }
  }
}

drawBoard(50, 50, 100);