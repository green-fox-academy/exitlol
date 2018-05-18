'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function topRight(x: number, b: number) {
  let a: number = canvas.width / 2;
  let y: number = canvas.width / 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(a, b);
  ctx.strokeStyle = '#53c237';
  ctx.stroke();
}

function botLeft(y: number, a: number) {
  let b: number = canvas.width / 2;
  let x: number = canvas.width / 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(a, b);
  ctx.strokeStyle = '#53c237';
  ctx.stroke();
}

function topLeft(y: number, a: number) {
  let b: number = canvas.width / 2;
  let x: number = canvas.width / 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(a, b);
  ctx.strokeStyle = '#53c237';
  ctx.stroke();
}

function botRight(y: number, a: number) {
  let x: number = canvas.width / 2;
  let b: number = canvas.width / 2;
  ctx.beginPath();
  ctx.moveTo(a, b);
  ctx.lineTo(x, y);
  ctx.strokeStyle = '#53c237';
  ctx.stroke();
}

for (let i: number = 0; i < 20; i++) {
  topRight(canvas.width / 2 + i * 10, i * 10);
  botLeft(canvas.width / 2 + i * 10, i * 10);
  topLeft(canvas.width / 2 - i * 10, i * 10);
  botRight(canvas.width / 2 + i * 10, canvas.width - i * 10);
}