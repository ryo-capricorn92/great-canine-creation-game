const express = require('express');
const db = require('./server/db');
const routes = require('./server/routes');

/* create express server */
const app = express();

/* decide which port to use */
app.set('port', process.env.PORT || '8080');

/* use the static bundle instead of the local server in production */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

/* define all the routes */
routes(app, express);

app.get('/api/test', (req, res) => {
  res.json({
    user: 'Ryo',
    message: 'Well, this seemed to have worked.',
  });
});

/* sync the database and listen on the chosen port */
db.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log(`Express server listening on port ${app.get('port')} in ${app.settings.env} mode`);
  });
});
