const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// router.get('/', (req, res) => {
//   res.json({
//     test: 'test',
//   });
// });

// app.use('/.netlify/functions/register', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// module.exports = app;
module.exports.handler = serverless(app);
