const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const errorHandlers = require('./handlers/errorHandlers');
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);

const router = express.Router();
app.use('/.netlify/functions/app', router);

app.use(errorHandlers.notFound);
app.use(errorHandlers.validationErrors);
app.use(errorHandlers.developmentErrors);

module.exports = app;

module.exports.handler = serverless(app);
