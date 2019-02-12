const config = require('./config');
const app = require('./app.js');

app.set('port', config.port);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
