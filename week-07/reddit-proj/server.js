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
  let sql = 'SELECT id, title, url, timestamp, score, vote, user_name FROM posts, users WHERE users.user_id = posts.owner_id;';
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
  // query to get user ID
  let userSerach = `SELECT user_id FROM users WHERE user_name = '${req.headers.username}';`;
  conn.query(userSerach, (err, id) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    // inserting into DB
    let userId = id[0].user_id;
    let insertSql = `INSERT INTO posts (title, url, owner_id) VALUES ('${req.body.title}', '${req.body.url}', '${userId}');`;
    conn.query(insertSql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
    });
  });

  // response with the last entry from DB

  let sql = 'SELECT id, title, url, timestamp, score, vote, user_name FROM posts, users WHERE users.user_id = posts.owner_id ORDER BY posts.id DESC LIMIT 1';
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

// Upvote with score change

app.put('/posts/:id/upvote', (req, res) => {
  let upVote = `UPDATE posts SET score = score + 1, vote = '1' WHERE id = '${
    req.params.id
  }';`;
  // query for update
  conn.query(upVote, (err, rows) => {
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
      res.status(200).json({
        result: rows
      });
    });
  });
});

// Downvote

app.put('/posts/:id/downvote', (req, res) => {
  let downVote = `UPDATE posts SET score = score - 1, vote = '-1' WHERE id = '${
    req.params.id
  }';`;
  // query for update
  conn.query(downVote, (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    //search for the same row to get response
    let search = `SELECT * from posts WHERE id = '${req.params.id}';`;
    conn.query(search, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.status(200).json({
        result: rows
      });
    });
  });
});

// Delete post

app.delete('/posts/:id', (req, res) => {
  //query DB for id
  let queryStr = `SELECT * FROM posts WHERE id = '${req.params.id}';`;
  conn.query(queryStr, (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    let deleted = rows[0];

    let delStr = `DELETE FROM posts WHERE id = '${req.params.id}';`;
    conn.query(delStr, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.status(200).json({
        deleted
      });
    });
  });
});

app.put('/posts/:id', (req, res) => {
  //query DB for update
  let updateStr = `UPDATE posts SET title = '${req.body.title}', url = '${req.body.url}' WHERE id = '${req.params.id}';`;
  conn.query(updateStr, (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    let queryStr = `SELECT * FROM posts WHERE id = '${req.params.id}';`;
    conn.query(queryStr, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.status(200).json({
        result: rows
      });
    });
  });
});

// listen to port
app.listen(PORT, () => {
  console.log(`Server up & running on: ${PORT}`);
});
