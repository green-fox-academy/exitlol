'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#53c237'
ctx.fillRect(0, 0, canvas.width, canvas.height)

function draw(x: number, y: number, size: number, count: number) {
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y + size / 3, size, size / 3);
  ctx.strokeRect(x + size / 3, y, size / 3, size);
  if (count > 1) {
    draw(x, y + size / 3, size / 3, count - 1);
    draw(x + size / 3, y, size / 3, count - 1);
    draw(x + size / 3, y + 2 * size / 3, size/3, count -1 );
    draw(x + 2 * size / 3, y + size / 3, size/3, count -1 );
  }
}

draw(0, 0, 600, 5);