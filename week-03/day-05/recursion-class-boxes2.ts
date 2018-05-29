'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

class Rectangle {
  x: number;
  y: number;
  linewidth: number;
  size: number;
  rectNum: number;

  constructor(x: number, y: number, size: number, n: number, linewidth: number) {
    this.x = x;
    this.y = y;
    this.size = Math.floor(Math.random()*2+size);
    this.linewidth = linewidth;
    this.rectNum = n;
    this.drawRect();
    this.initFractal();
  }

  drawRect() {
    ctx.strokeStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    ctx.lineWidth = this.linewidth;
    ctx.strokeRect(this.x + this.size, this.y + this.size, this.size, this.size);
  }
  initFractal() {
    if (this.rectNum > 1) {
      let self: Rectangle = this;
      setTimeout(function(){
        new Rectangle(self.x + self.size / 4, self.y + self.size / 4, self.size / 2, self.rectNum - 1, self.linewidth - 1);
        new Rectangle(self.x + self.size + self.size / 4, self.y + self.size / 4, self.size / 2, self.rectNum - 1, self.linewidth - 1);
        new Rectangle(self.x + self.size / 4, self.y + self.size + self.size / 4, self.size / 2, self.rectNum - 1, self.linewidth - 1);
        new Rectangle(self.x + self.size + self.size / 4, self.y + self.size + self.size / 4, self.size / 2, self.rectNum - 1, self.linewidth - 1);
      }, 500);
    }
  }
}

let r: Rectangle = new Rectangle(0, 0, 200, 6, 7);