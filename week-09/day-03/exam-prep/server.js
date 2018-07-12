'use strict';

const mysql = require('mysql');
const express = require('express');
const PORT = 3000;
const path = require('path');
const app = express();
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'MacrotisOrientationExam',
});

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  let sql = 'SELECT * FROM attractions';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    res.sendFile(path.join(__dirname,'/views/index.html'));
  });
});

app.get('/attractions', (req, res) => {
  let sql = 'SELECT * FROM attractions';
  conn.query(sql, (err, rows)=> {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.json(
      rows,
    );
  });
});


function checkKeys(req) {
  req.body.name !== undefined && req.body.name !== '' &&
  req.body.city !== undefined && req.body.city !== '' &&
  req.body.category !== undefined && req.body.category !== '' &&
  req.body.price !== undefined && req.body.price !== '' &&
  req.body.longitude !== undefined && req.body.longitude !== '' &&
  req.body.lattitude !== undefined && req.body.lattitude !== '' &&
  req.body.recommendedAge !== undefined && req.body.recommendedAge !== '' &&
  req.body.duration !== undefined && req.body.duration !== ''
}

app.post('/add', (req, res) => {
  if (checkKeys(req)) {
    let sql = 'INSERT INTO attractions (attr_name, city, category, price, longitude, lattitude, recommended_age, duration) VALUES (?,?,?,?,?,?,?,?,)';
    const values = [req.body.name, req.body.city, req.body.category, req.body.price, req.body.longitude, req.body.lattitude, req.body.recommended_age, req.body.duration];

    // sql = mysql.format(sql, values);

    conn.query(sql, values,  (err, status) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json();
    });
  }
});

app.listen(PORT, () => {
  console.log(`Up and running on: ${PORT}`);
});
