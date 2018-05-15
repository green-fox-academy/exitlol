export{};
'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
let todoText: string = ' - Buy milk\n';
let add1: string = 'My todo:\n';
let add2: string = ' - Download games\n';
let add3: string = ' - Diablo\n';

todoText = `${add1}${todoText}${add2}    ${add3}`

console.log(todoText);
