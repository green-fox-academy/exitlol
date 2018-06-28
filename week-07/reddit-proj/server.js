'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/static', express.static('static'));

// SQL connection

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// basic endpoint

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

// simple hello text for testing purposes

app.get('/hello', (req, res) =>{
  let message = 'Hello world';
  res.send(
    message,
  );
});

// posts get endpoint

app.get('/posts', (req, res) => {
  let sql = 'SELECT * FROM posts;';
  conn.query(sql, (err, rows)=> {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      result: rows,
    });
  });
});

app.post('/posts', (req, res) => {
  let insertSql = `INSERT INTO posts (title, url) VALUES ("${req.body.title}", "${req.body.url}");`;
  conn.query(insertSql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    console.log(`Insterted ${req.body.title} and ${req.body.url} at ${rows.insertId}`);
  });
  let sql = 'SELECT * FROM  posts WHERE ID = (SELECT MAX(ID)  FROM posts);';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      result: rows,
    });
  });
});

// listen to port
app.listen(PORT, () =>{
  console.log(`Server up & running on: ${PORT}`);
});