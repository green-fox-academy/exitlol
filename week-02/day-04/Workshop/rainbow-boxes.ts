'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.


function drawRect() {
  for (let i: number = 600; i > 0; i--) {
    let color: string = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    // color = `hsl(${i},100%,50%)`;
    ctx.fillStyle = color;
    ctx.fillRect(300 - i / 2, 200 - i / 2, i, i);
    // size -= 1;
  }
}

drawRect();