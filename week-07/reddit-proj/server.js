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
  database: process.env.DB_DATABASE
});

// basic endpoint

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

// simple hello text for testing purposes

app.get('/hello', (req, res) => {
  let message = 'Hello world';
  res.send(message);
});

// posts get endpoint

app.get('/posts', (req, res) => {
  let sql = 'SELECT * FROM posts;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.status(200).json({
      result: rows
    });
  });
});
// instert into DB with post req

app.post('/posts', (req, res) => {
  let insertSql = `INSERT INTO posts (title, url) VALUES ("${
    req.body.title
  }", "${req.body.url}");`;
  conn.query(insertSql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
  });

  // response with the last entry from DB

  let sql = 'SELECT * FROM  posts WHERE ID = (SELECT MAX(ID)  FROM posts);';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.status(200).json({
      result: rows
    });
  });
});

// updating score

app.put('/posts/:id/upvote', (req, res) => {
  // update query for said ID

  let upDate = `UPDATE posts SET score = score + 1, vote = '1' WHERE id = '${
    req.params.id
  }';`;
  conn.query(upDate, (err, rows) => {
    if (err) {
      console.log(err);
      rows.sendStatus(500);
      return;
    }
    // search for the same row to get response

    let search = `SELECT * from posts WHERE id = '${req.params.id}';`;
    conn.query(search, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json({
        result: rows
      });
    });
  });
});

// listen to port
app.listen(PORT, () => {
  console.log(`Server up & running on: ${PORT}`);
});
