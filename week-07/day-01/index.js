"use strict";

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/doubling", (req, res) => {
  if (req.query.input) {
    res.json({
      received: parseInt(req.query.input),
      result: parseInt(req.query.input) * 2
    });
  } else {
    res.json({
      error: "Please provide an input!"
    });
  }
});

app.get("/greeter", (req, res) => {
  if (req.query.name === undefined && req.query.title === undefined) {
    res.json({
      error: "Please provide a name!"
    });
  } else if (req.query.title === undefined) {
    res.json({
      error: "Please provide a title!"
    });
  } else if (req.query.name === undefined) {
    res.json({
      error: "Please provide a name!"
    });
  } else
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${
        req.query.title
      }!`
    });
});

app.get("/appenda/:appendable", (req, res) => {
  const whatever = req.params.appendable + "a";
  if (req.params) {
    res.json({
      appended: whatever
    });
  }
});

app.post("/dountil/:what", (req, res) => {
  const status = req.params.what;
  let sum = 0;
  let factorial = 1;
  if (status === "sum" && req.body.until) {
    for (let i = 0; i < +req.body.until+1; i++) {
      sum += i;
    }
    res.json({
      result: sum
    });

  } else if (status === "factor" && req.body.until) {
    for (let i = 1; i < parseInt(req.body.until)+1; i++) {
      factorial *= i;
    }
  }
  res.json({
    result: factorial
  })
});

app.post('/arrays', (req, res) => {
  console.log(req.body.what);
  let toDo = req.body.what;
  let numArray = req.body.numbers;
  let doubRes = [];
  let sumRes = 0;
  let multRes = 0;
  if (toDo === undefined) {
    res.json({
      "error": "Please provide what to do with the numbers!"
    })
  } else if (toDo === 'sum') {
    for (let i = 0; i < numArray.length; i++) {
      sumRes += numArray[i];
    }
    res.json({
      result : sumRes
    })
  } else if (toDo === 'multiply') {
    for (let i = 1; i < numArray.length; i++) {
      multRes = numArray.reduce((a, b) => a * b)
    }
    res.json({
      result: multRes
    })
  } else if (toDo === 'double') {
    for (let i = 0; i < numArray.length; i++) {
      doubRes.push(numArray[i] * 2)
    }
    res.json({
      result : doubRes
    });
  }
});

app.post('/sith', (req, res) => {
  let sentence = req.body.text;
  sentence.toLowerCase();
  let randoms = ['Arrgh.', 'Uhmm.', 'Err..err.err.']
  if (req.body === undefined || sentence === undefined) {
    res.json({
      error : "Feed me some text you have to, padawan young you are. Hmmm."
    })
  } else if (sentence) {
    let sentArray = sentence.split(' ');
    let tempArray = [];
    for (let i = 0; i < sentArray.length; i++) {
      if (i % 2 !== 0) {
        let wordArray = [];
        wordArray.push(sentArray[i]);
        tempArray.push(sentArray[i]);
        tempArray.push(wordArray[i-1]);
        console.log(tempArray);
      }
    }
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
