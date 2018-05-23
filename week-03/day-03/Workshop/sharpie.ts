class Sharpie  {
  color: string;
  width: number;
  inkAmmount: number;

  constructor (color: string, width: number) {
    this.inkAmmount = 100;
  }

  use () {
    this.inkAmmount -= 0.15;
  }
}

let mySharpie = new Sharpie ('blue', 20.5);
for (let i: number = 0; i < 10; i ++) {
  mySharpie.use();
  console.log(mySharpie.inkAmmount);
}