require('newrelic');
const express = require('express');
const port = 8080;
const app = express();
const path = require('path');

app.use('/:id', express.static(path.join(__dirname, '/../public')));
// app.use(express.static(__dirname + '/../client'));

app.listen(port, () => {
  console.log(`server running at: http://18.144.86.119:${port}`);
});

// get all bundle.js

// app.get('./bundle.js/:3001', (req, res) => {
//   request('http://localhost:3001/dist/bundle.js', (err, response, body) => {
//       res.status(200).send(body);
//   })
// })

// app.get('./bundle.js/:3002', (req, res) => {
//   request('http://localhost:3002/bundle.js', (err, response, body) => {
//       res.status(200).send(body);
//   })
// })


// app.get('./bundle.js/:3003', (req, res) => {
//   request('http://localhost:3003/bundle.js', (err, response, body) => {
//       res.status(200).send(body);
//   })
// })

// app.get('./bundle.js/:3004', (req, res) => {
//   request('http://localhost:3004/bundle.js', (err, response, body) => {
//       res.status(200).send(body);
//   })
// })


