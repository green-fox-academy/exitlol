'use strict';

const nav = document.querySelector('nav');
const inspector = document.querySelector('.img-inspector');


function move(event) {
  
  let button = event.target;
  if (button.localName === 'button') {
    if (button.dataset.action === 'move') {
      switch (button.dataset.direction) {
        case 'up':
        let up = inspector.style.backgroundPositionY || 0;
        inspector.style.backgroundPositionY = `${parseInt(up) - 10}px`;
        break;
        case 'down':
        let down = inspector.style.backgroundPositionY || 0;
        inspector.style.backgroundPositionY = `${parseInt(down) + 10}px`;
        break;
        case 'right':
        let right = inspector.style.backgroundPositionX || 0;
        inspector.style.backgroundPositionX = `${parseInt(right) - 10}px`;
        break;
        case 'left':
        let left = inspector.style.backgroundPositionX || 0;
        inspector.style.backgroundPositionX = `${parseInt(left) + 10}px`;
        break;
      }
    }
  }
}

function zoom(event) {
  let button = event.target;
  if (button.localName === 'button') {
    if (button.dataset.action === 'zoom') {
      switch (button.dataset.direction) {
      case 'in':
      let zoomIn = inspector.style.backgroundSize || 200;
      console.log(zoomIn);
      inspector.style.backgroundSize = `${parseInt(zoomIn) + 20}%`;
      break;
      case 'out':
      let zoomOut = inspector.style.backgroundSize || 200;
      inspector.style.backgroundSize = `${parseInt(zoomOut) - 20}%`;
      break;
      }
    }
  }
}

nav.addEventListener('click', move);
nav.addEventListener('click', zoom);