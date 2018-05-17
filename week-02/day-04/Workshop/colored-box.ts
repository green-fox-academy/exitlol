'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.


ctx.beginPath();
ctx.moveTo(250,100);
ctx.lineTo(350,100);
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(350,100);
ctx.lineTo(350,200);
ctx.strokeStyle = 'blue';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(350,200);
ctx.lineTo(250,200);
ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250,200);
ctx.lineTo(250,100);
ctx.strokeStyle = 'purple';
ctx.stroke();