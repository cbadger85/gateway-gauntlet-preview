const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config();

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
