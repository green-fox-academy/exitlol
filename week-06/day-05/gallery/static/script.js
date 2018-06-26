'use strict';

const imgGal = [
  {url: '../static/img/Another Foggy forest.jpg', title: 'Another Foggy Forest', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`},
  {url: '../static/img/Field sunset.jpg', title: 'Field Sunset', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`},
  {url: '../static/img/Foggy-forest.jpg', title: 'Foggy Forest', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`},
  {url: '../static/img/Shooting star.jpg', title: 'Shooting Star', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`},
  {url: '../static/img/Waterfall.jpg', title: 'Waterfall', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`},
  {url: '../static/img/Waves.jpg', title: 'Waves', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`}
];


const gallery = document.querySelector('img');
const buttons = document.querySelectorAll('.nav-button');


buttons[0].addEventListener('click', function (event) {
  let i = 0;
  if (gallery.alt === imgGal[0].title) {
    gallery.src = imgGal[0].url;
    buttons[0].disabled = true;
  } else if (gallery.alt !== imgGal[0].title) {
    gallery.src = imgGal[i].url;
    gallery.alt = imgGal[i].title;
    i--;
  }
});

buttons[1].addEventListener('click', function (event) {
  let i = 0;
  if (gallery.alt === imgGal[imgGal.length-1].title) {
    gallery.src = imgGal[imgGal.length-1].url;
    buttons[1].disabled = true;
  } else if (gallery.alt !== imgGal[imgGal.length-1].title) {
    i++;
    gallery.src = imgGal[i].url;
    gallery.alt = imgGal[i].title;
    console.log(`${gallery} picture number: ${i}`);
  
  }
})
