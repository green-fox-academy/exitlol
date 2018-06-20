'use strict';

const kids = [
  {'pet_name':'Wattled crane','owner':'Bryant'},
  {'pet_name':'Devil, tasmanian','owner':'Alejandro'},
  {'pet_name':'Mynah, common','owner':'Nelie'},
  {'pet_name':'Dolphin, common','owner':'Mariele'},
  {'pet_name':'Gray duiker','owner':'Maddalena'},
  {'pet_name':'Crab (unidentified)','owner':'Lucine'},
  {'pet_name':'Ant (unidentified)','owner':'Lorianna'},
  {'pet_name':'Bison, american','owner':'Tommie'},
  {'pet_name':'Yellow mongoose','owner':'Vivyan'},
  {'pet_name':'Carpet snake','owner':'Veda'},
  {'pet_name':'Lesser mouse lemur','owner':'Isidor'}
];

const container = document.querySelector('#pets');
kids.forEach((element) => {
  let article = document.createElement('article');
  container.appendChild(article);
})

const listItems = document.querySelectorAll('article');

for (let i = 0; i < kids.length; i++) {
  let header = document.createElement('h3');
  let paragraph = document.createElement('p');
  header.textContent = kids[i].owner;
  paragraph.textContent = kids[i].pet_name;
  listItems[i].appendChild(header);
  listItems[i].appendChild(paragraph);
  if(i % 2 === 0) {
    listItems[i].style.backgroundColor = 'grey';
  } else if (i % 2 !== 0) {
    listItems[i].style.backgroundColor = '#53c273';
  }
}