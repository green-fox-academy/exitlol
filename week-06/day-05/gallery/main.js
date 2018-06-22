'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

const imgGal = [
  {url: '../static/img/Another Foggy forest.jpg', title: 'Another Foggy Forest', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`},
  {url: '../static/img/Field sunset.jpg', title: 'Field Sunset', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`},
  {url: '../static/img/Foggy-forest.jpg', title: 'Foggy Forest', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`},
  {url: '../static/img/Shooting star.jpg', title: 'Shooting Star', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`},
  {url: '../static/img/Waterfall.jpg', title: 'Waterfall', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`},
  {url: '../static/img/Waves.jpg', title: 'Waves', desc: `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks../static/ Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`}
];

app.use('/static', express.static('static'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    imgGal,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

