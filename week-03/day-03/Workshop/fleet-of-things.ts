// import {Thing} from "./thing";
import { Fleet } from "./fleet";
import { Thing } from "./thing";


let getMilk = new Thing('Get milk');
let obstacle = new Thing('Remove the obstacles');
let standUp = new Thing('Stand up');
standUp.complete();
let eatLunch = new Thing('Eat lunch');
eatLunch.complete();

let fleet = new Fleet();

function initFleet(): Fleet {
  // fleet.things = [];
  fleet.add(getMilk);
  fleet.add(obstacle);
  fleet.add(standUp);
  fleet.add(eatLunch);
  return fleet;
}
initFleet();

for (let i: number = 0; i < fleet.thing().length; i++) {
  fleet.print(i);
}



//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */