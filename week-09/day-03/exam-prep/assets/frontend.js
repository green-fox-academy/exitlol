'use strict';


const tBody = document.querySelector('tbody');
const inputName = document.querySelector('input[name="name"]');
const inputCity = document.querySelector('input[name="city"]');
const inputCategory = document.querySelector('input[name="category"]');
const inputPrice = document.querySelector('input[name="price"]');
const inputLong = document.querySelector('input[name="long"]');
const inputLatt = document.querySelector('input[name="latt"]');
const inputRecAge = document.querySelector('input[name="recomennded_age"]');
const inputDur = document.querySelector('input[name="duration"]');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const xhrPost = new XMLHttpRequest();
  xhrPost.open('POST', '/add');
  xhrPost.setRequestHeader('Content-Type', 'pplication/json');

  const {attr_name, city, category, price, longitude, lattitude, recommended_age, duration} = e.target.elements;
  xhrPost.send(JSON.stringify({
    name: attr_name.value,
    city: city.value,
    category: category.value,
    price: price.value,
    longitude: longitude.value,
    lattitude: lattitude.value,
    recommendedAge: recommended_age.value,
    duration: duration.value,
  }));
});


function createTableBody(rows) {
  rows.forEach((row) => {
    const tr = document.createElement('tr');
    Object.keys(row).forEach((key) => {
      if (key !== 'id') {
        let td = document.createElement('td');
        td.textContent = row[key];
        tr.appendChild(td);
      }
    });

    const button = document.createElement('button');
    button.textContent = 'Edit';
    button.addEventListener('click', () =>{
      Object.keys(row).forEach((key) => {
        if (key !== 'id') { 
          const input = document.querySelector(`input[name="${key}"]`);
          input.value = row[key];
        }
      });
    });
    tr.appendChild(button);
    tBody.appendChild(tr);
  });
}

function pageLoad() {
  const http = new XMLHttpRequest();
  http.open('GET', '/attractions');
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    createTableBody(response);
  }
  http.send();
}

pageLoad();
