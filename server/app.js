const express = require('express');
const path = require('path');
require('dotenv').config({ path: './.env.local' });

const routes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

// Middleware


// app.use('/', routes);

app.get('/api', (req, res) => res.send('API stuff...'));

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
