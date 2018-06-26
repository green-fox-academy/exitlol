'use strict';


const button = document.querySelector('button');
const wrapper = document.querySelector('#wrapper');

let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=dank&api_key=auJS9drmU2hZhltimtqneajj47PKdUY7&limit=16', true);
httpRequest.onload = () => {
  let data = JSON.parse(httpRequest.responseText);
  console.log(data.data);
  data.data.forEach((e) => {
    const div = document.createElement('div');
    const imgGen = document.createElement('img');
    wrapper.appendChild(div);
    div.appendChild(imgGen);
    imgGen.src = e.images.fixed_height_still.url;
    imgGen.addEventListener('click', () => {
      imgGen.setAttribute('src', e.images.fixed_height_downsampled.url);
    })
  });
}

button.addEventListener('click', function() {
  httpRequest.send();
});


