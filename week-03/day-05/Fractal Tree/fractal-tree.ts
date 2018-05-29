'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

class Tree {
  x: number;
  y: number;
  length: number;
  angle: number;

  constructor(startX: number, startY: number, len: number, angle: number) {
    this.x = startX;
    this.y = startY;
    this.length = len;
    this.angle = angle;
    this.drawTree();
    this.initFractal();
  }

  drawTree() {
    if (this.length > 10) {

      ctx.beginPath();
      // ctx.save();

      // ctx.translate(this.x, this.y);
      ctx.rotate(this.angle * Math.PI / 180);
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y-this.length);
      ctx.strokeStyle = 'black';
      ctx.stroke();
    }
  }

  initFractal() {
    new Tree(0, -this.length, this.length * 0.8, this.length - 15);
  }
}

let tree: Tree = new Tree(300, 600, 10, 0);