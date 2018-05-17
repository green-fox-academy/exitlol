'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let x1: number = canvas.width / 2;
let y1: number = canvas.height / 2;



function drawToCenter (x, y) {
  for(let i: number = 0; i < 30; i++) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    x += 20;
  }

  for(let j: number = 0; j < 20; j++) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    y += 20; 
  }

  for(let k: number = 0; k < 30; k++) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    x -= 20;
    // console.log(`x: ${x} - y: ${y}`);
  }

  for(let l: number = 0; l < 20; l++) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = 'green';
    ctx.stroke();
    y -= 20;
  }
}

drawToCenter(0,0);