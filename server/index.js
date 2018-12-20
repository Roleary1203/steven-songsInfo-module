const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

// GET request to db
app.get('/api/songs-info', (req, res) => {
  if (err) {
    console.log('ERR: fix GET server routing');
  } else {
    res.send(JSON.stringify(data));
  }
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
