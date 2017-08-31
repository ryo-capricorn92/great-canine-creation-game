const userRoutes = require('./models/users/routes');
const dogRoutes = require('./models/dogs/routes');

module.exports = (app, passport) => {
  app.post('/api/signup', passport.authenticate('local-signup', {
    successRedirect: '/success',
    failureRedirect: '/failure',
  }));
  app.post('/api/login', passport.authenticate('local-login'), (req, res) => {
    if (req.user) {
      res.json({
        loggedIn: true,
        user: req.user,
      });
    } else {
      res.json({ loggedIn: false });
    }
  });
  app.get('/api/isLoggedIn', (req, res) => {
    if (req.user) {
      res.json({
        loggedIn: true,
        user: req.user,
      });
    } else {
      res.json({ loggedIn: false });
    }
  });
  app.get('/api/check/username/:username', userRoutes.checkUsername);
  app.get('/api/check/email/:email', userRoutes.checkEmail);
};

/*
  to login from the front end, a fetch request must be made with same-origin credentials

  fetch('/api/login', { 
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  });

  subsequent requests should include credentials

  fetch('/test', { 
    credentials: 'include'
  }).then((data) => data.json());
*/
