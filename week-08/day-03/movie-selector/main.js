'use strict';

const movieList = [
  [`Moon`, `2001 Space odessy`, `Contact`],
  [`Darkest Hour`, `There will be blood`, `American beauty`],
  [`Airplane!`, `Deadpool`, `Wayne's world`]
];

const mainCont = document.querySelector('#genre-div');
const genre = document.querySelector('#genre-select');
const pTag = document.createElement('p');


const newSelect = document.createElement('select');

genre.addEventListener('change', () => {
  newSelect.innerHTML = '';
  mainCont.appendChild(newSelect);
  movieList[`${genre.value - 1}`].forEach((element) => {
    const movie = document.createElement('option');
    movie.textContent = element;
    newSelect.appendChild(movie);
  });
  mainCont.appendChild(pTag);
  pTag.textContent = `The selected movie is: ${newSelect[0].textContent}`;
});

newSelect.addEventListener('change', () => {
  pTag.textContent = `The selected movie is: ${newSelect.value}`;
});