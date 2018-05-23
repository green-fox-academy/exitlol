import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let domValues: any[] = [];
function sortThem (dominoes: Domino[]) {
  for (let i: number = 0; i < dominoes.length; i++) {
    domValues.push(dominoes[i].values)
  }
}

let tempArray: any[] = [];
function pushThem (domValues) {
  tempArray.push(domValues[0]);
  for(let i: number = 0; i < domValues.length; i++) {
    for(let j: number = 1; j <domValues.length; j++) {
      if(tempArray[i][1] === domValues[j][0]) {
        tempArray.push(domValues[j]);
      }
    }
  }
console.log(tempArray);
}

// loop through the values find the matching dominoes

// push them into a temp array

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);
sortThem(dominoes);
pushThem(domValues);
