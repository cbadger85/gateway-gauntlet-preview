const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/register', (req, res) => {
  res.json({
    test: 'message',
  });
});

app.post('/register', (req, res) => {
  console.log(req.body);

  res.json({
    message: req.body.message,
  });
});

module.exports = router;
module.exports.handler = serverless(app);
