"use strict";

const asteroidsList = document.querySelector(".asteroids");
const king = document.querySelector("li");

asteroidsList.removeChild(king);

const planetData = [
  {
    category: "inhabited",
    content: "Foxes",
    asteroid: true
  },
  {
    category: "inhabited",
    content: "Whales and Rabbits",
    asteroid: true
  },
  {
    category: "uninhabited",
    content: "Baobabs and Roses",
    asteroid: true
  },
  {
    category: "inhabited",
    content: "Giant monsters",
    asteroid: false
  },
  {
    category: "inhabited",
    content: "Sheep",
    asteroid: true
  }
];


for (let i = 0; i < planetData.length; i++) {
  let listItem = document.createElement('li');
  
  if(planetData[i].asteroid) {
    listItem.className = planetData[i].category;
    listItem.textContent = planetData[i].content;
    asteroidsList.appendChild(listItem);
  }
}
