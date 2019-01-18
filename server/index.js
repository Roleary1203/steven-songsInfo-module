const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../database/controllers/index.js');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/../client/dist'));
app.use('/', express.static('./client/dist/'));
app.use(/\/\d+\//, express.static('./client/dist/'));

// GET request to db
// only rendering one row from databse for now
// need to write random num generator
// to only GET one id per rendering of client

const ranNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

app.get('/api/songs-info/:id', controllers.getData)
app.post('/api/songs-info/follower', controllers.updateFollowers)


app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

module.exports = app;
