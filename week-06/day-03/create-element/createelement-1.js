'use strict';

const asteroidList = document.querySelector('ul');
const newAsteroid = document.createElement('li');
const newAsteroid2 = document.createElement('li');


newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

newAsteroid2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid2);

const text = 'I can add elements to the DOM!';
const imageSrc = 'http://eastchapelhillobserver.com/wp-content/uploads/2017/03/magaizine-spring-2016-orca-dave-ellifrit-center-for-whale-research-nmfs-permit-15569-dfo-sara-272_.jpg';
const heading = document.createElement('h1');
const container = document.querySelector('.container');
const image = document.createElement('img');

heading.textContent = text;
image.src = imageSrc;
container.appendChild(heading);
container.appendChild(image);
