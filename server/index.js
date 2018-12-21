const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

// GET request to render index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// GET request to db
app.get('/api/songs-info', (req, res) => {
  db.read()
    .then(data => {
      res.json(data).sendStatus(200);
    })
    .catch(err => {
      console.log('server GET request not working', err);
    });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

module.exports = app;
