const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const db = require('./server/db');
const User = require('./server/models/users/model');
const routes = require('./server/routes');

/* create express server */
const app = express();

/* decide which port to use */
app.set('port', process.env.PORT || '8080');

/* configure middleware and express configs */
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'piano possum',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
  },
}));
app.use(passport.initialize());
app.use(passport.session());

/* use the static bundle instead of the local server in production */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

/* configure passport */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({ where: { id } }).then((user) => {
    done(null, user);
  });
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
}, (req, username, password, done) => { // eslint-disable-line consistent-return
  const email = req.body.email;
  const ThirteenYearsAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 13));
  if (!username || !password || !email) {
    return done(null, false, { message: 'Username, email, and password is required' });
  }

  if (password.length < 8) {
    return done(null, false, { message: 'Password must be at least 8 characters' });
  }

  if (new Date(req.body.birthday) > ThirteenYearsAgo) {
    return done(null, false, { message: 'You must be 13 or older to signup for an account' });
  }

  User.isEmailOrUsernameTake(email, username).then((isTaken) => {
    if (isTaken) {
      return done(null, false, { message: 'Username or email is taken.' });
    }

    return User.create({ username, password: User.generateHash(password), email })
      .then(newUser => req.session.save(() => done(null, newUser)));
  });
}));

passport.use('local-login', new LocalStrategy((username, password, done) => {
  User.findOne({ where: { username } }).then((user) => {
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password, user.password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}));

/* define all the routes */
routes(app, passport);

app.get('/api/test', (req, res) => {
  res.json({
    user: 'Ryo',
    message: 'Well, this seemed to have worked.',
  });
});

/* sync the database and listen on the chosen port */
db.sync().then(() => {
  app.listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log(`Express server listening on port ${app.get('port')} in ${app.settings.env} mode`);
  });
});
