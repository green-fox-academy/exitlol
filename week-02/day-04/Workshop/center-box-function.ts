'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let colors: string[] = ['red', 'green', 'blue'];

function drawRect(size) {
  for (let i: number = 0; i < 3; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(300 - size / 2, 200 - size / 2, (size), (size));
    size -= 10;
  }
}

drawRect(80);
