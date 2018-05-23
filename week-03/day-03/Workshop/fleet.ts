import { Thing } from "./thing";

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }
  add(thing: Thing) {
    this.things.push(thing);

  }
  thing(): Thing[] {
    return this.things;
  }
  print(i: number): void {
    let endRes: string = '[';
    if (this.things[i].getCompleted() === true) {
      endRes += 'X] ';
    } else {
      endRes += ' ] ';

    }
    endRes += this.things[i].getName();
    console.log(`${i+1}: ${endRes}`);
  }
}

export { Fleet };
