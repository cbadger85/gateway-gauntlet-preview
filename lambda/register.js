const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

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
