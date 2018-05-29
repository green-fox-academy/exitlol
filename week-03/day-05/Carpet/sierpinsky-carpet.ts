'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

class Rectangle {
  x: number;
  y: number;
  size: number;
  rectNum: number;

  constructor(x: number, y: number, size: number, rectNum: number) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rectNum = rectNum;
    this.drawRect();
    this.initFractal();
  }

  drawRect() {
    ctx.fillStyle = '#53c237' //+ (Math.random() * 0xFFFFFF << 0).toString(16);
    ctx.fillRect(this.x + this.size, this.y + this.size, this.size, this.size);
  }

  initFractal() {
    if (this.rectNum > 1) {
      new Rectangle(this.x + this.size / 6, this.y + this.size / 6, this.size / 4, this.rectNum - 1);
      new Rectangle(this.x + this.size + this.size / 6, this.y + this.size / 6, this.size / 4, this.rectNum - 1);
      new Rectangle(this.x + this.size + this.size + this.size / 6, this.y + this.size / 6, this.size / 4, this.rectNum - 1);
      new Rectangle(this.x + this.size + this.size + this.size / 6, this.y + this.size + this.size / 6, this.size / 4, this.rectNum - 1);
      new Rectangle(this.x + this.size + this.size + this.size / 6, this.y + this.size + this.size + this.size / 6, this.size / 4, this.rectNum - 1);
      new Rectangle(this.x + this.size + this.size / 6, this.y + this.size + this.size + this.size / 6, this.size / 4, this.rectNum - 1);
      new Rectangle(this.x + this.size / 6, this.y + this.size + this.size + this.size / 6, this.size / 4, this.rectNum - 1);
      new Rectangle(this.x + this.size / 6, this.y + this.size + this.size / 6, this.size / 4, this.rectNum - 1);
    }
  }

}

let r: Rectangle = new Rectangle(0, 0, 200, 6)