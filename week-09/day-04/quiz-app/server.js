'use strict';

const express = require('express');
const mysql = require('mysql');
const path = require('path');
const dotenv = require('dotenv');
const PORT = 3000;

const app = express();
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quiz',
});

app.use('/static', express.static('static'));
app.use(express.json());

app.get('/', (req, res) =>{
  let questionNum = 'SELECT * FROM questions;';
  conn.query(questionNum, (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    } 
    res.sendFile(path.join(__dirname, '/static/index.html'));
  });
});

app.get('/game', (req, res) => {
  let questionId = 'SELECT id FROM questions ORDER BY RAND() LIMIT 1;';
  conn.query(questionId, (err, rows)=> {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    let rndQuestion = `SELECT * FROM answers
    JOIN questions ON questions.id = answers.question_id
    WHERE questions.id = ${rows[0].id};`;
    conn.query(rndQuestion, (err, question) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return
      }
      res.status(200).json(question);
    })
  });
});

app.get('/api/questions', (req, res) => {
  let sql = 'SELECT * FROM questions;';
  conn.query(sql,(err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    res.status(200).json(rows);
  })
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/manage.html'));
});

app.post('/api/questions', (req, res) => {
  let postQuestion = `INSERT INTO questions (question) VALUES ('${req.body.question}');`;
  conn.query(postQuestion, (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    
    let postAnswers = `INSERT INTO answers (answer, question_id, is_correct)
    VALUES ('${req.body.answer_1}', '${rows.insertId}', '${req.body.is_correct_1}'),
    ('${req.body.answer_2}', '${rows.insertId}', '${req.body.is_correct_2}'),
    ('${req.body.answer_3}', '${rows.insertId}', '${req.body.is_correct_3}'),
    ('${req.body.answer_4}', '${rows.insertId}', '${req.body.is_correct_4}');`;
    conn.query(postAnswers, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.status(200).json({
        message: 'OK',
      })
    })
  })
});

app.listen(PORT, () => {
  console.log(`Up and running on: ${PORT}`);
});
