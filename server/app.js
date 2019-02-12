const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const errorHandlers = require('./handlers/errorHandlers');
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.use(errorHandlers.notFound);
app.use(errorHandlers.validationErrors);
app.use(errorHandlers.developmentErrors);

module.exports = app;
