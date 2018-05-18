'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lineTop (x: number, b: number) {
  let a: number = canvas.width;
  let y: number = 0
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(a, b);
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function lineBot (y: number, a: number) {
  let b: number = canvas.width;
  let x: number = 0
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(a, b);
  ctx.strokeStyle = '#53c237';
  ctx.stroke();
}

for(let i: number = 0; i < 20; i++) { 
  lineTop(i * 20, i * 20);
  lineBot(i * 20, i * 20);
}