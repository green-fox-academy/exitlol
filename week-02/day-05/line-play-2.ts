'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x: number = 0;
let y: number = 0;
let x1: number = 0;
let y1: number = 0;


for (let i: number = 0; i < 20; i++) {
  x1 = canvas.width;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.strokeStyle = 'black';
  ctx.stroke();
  x += 20;
  y1 += 20;
  console.log(`----------------------------------------`);
}

for (let j: number = 0; j < 20; j++) {
  y1 = canvas.height;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.strokeStyle = 'black';
  ctx.stroke();
  y+= 20;
  x1+=20;
  console.log(`x: ${x} y: ${y} -- x1:${x1} y1:${y1}`);
}
