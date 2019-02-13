// const express = require('express');
// const serverless = require('serverless-http');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const router = express.Router();

// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   res.append('Access-Control-Max-Age', '2592000');
//   res.append('Access-Control-Allow-Credentials', 'true');
//   next();
// });

// app.get('/register', (req, res) => {
//   res.json({
//     test: 'message',
//   });
// });

// app.post('/register', (req, res) => {
//   console.log(req.body);

//   res.json({
//     message: req.body.message,
//   });
// });

// module.exports = router;
// module.exports.handler = serverless(app);

exports.handler = async (event, context) => ({
  statusCode: 200,
  body: 'Hello World',
});
