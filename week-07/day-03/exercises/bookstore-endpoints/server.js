'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get(`/`, (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/book_titles/', (req, res) => {
  let sql = 'SELECT book_name from book_mast;';
  connection.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      titles: rows,
    });
  });
});





app.listen(PORT, () => {
  console.log(`The server is up and running on: ${PORT}`);
});
