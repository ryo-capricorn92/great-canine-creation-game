const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const db = require('./server/db');
const User = require('./server/models/users/model');
const routes = require('./server/routes');

/* create express server */
const app = express();

/* decide which port to use */
app.set('port', process.env.PORT || '8080');

/* use the static bundle instead of the local server in production */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

/* configure middleware and express configs */
app.use(session({
  secret: 'piano possum',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 604800000,
  },
}));
app.use(passport.initialize());
app.use(passport.session());

/* configure passport */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use('local-signup', new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) { return done(err); }
    if (user) {
      return done(null, false, { message: 'Username is taken.' });
    }
    const newUser = new User({ username });
    newUser.password = newUser.generateHash(password);
    return newUser.save((error) => {
      if (error) { throw error; }
      return done(null, newUser);
    });
  });
}));

passport.use('local-login', new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}));

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
