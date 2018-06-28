'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));

//basic endpoint
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/hello', (req, res) =>{
  let message = 'Hello';
  res.send({
    message,
  });
});

//listen to port
app.listen(PORT, () =>{
  console.log(`Server up & running on: ${PORT}`);
});