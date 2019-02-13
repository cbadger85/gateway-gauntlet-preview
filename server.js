const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const register = require('./lambda/register');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;

  console.log(log);

  next();
});

app.use('/.netlify/functions', register);

dotenv.config();

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
