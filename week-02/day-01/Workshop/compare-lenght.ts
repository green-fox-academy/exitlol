export{};
'use strict';

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

const firstList = [1, 2, 3];
const secondList = [4, 5];

if (firstList.length > secondList.length) {
  console.log('The First list is longer than the Second list.');
}