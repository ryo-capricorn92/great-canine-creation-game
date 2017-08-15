const User = require('./model');

module.exports = {
  testSignUp: (req, res) => { // eslint-disable-line consistent-return
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) { return res.json({ message: 'Username and password is required' }); }
    User.findOne({ where: { username } }).then((user) => {
      if (user) {
        return res.json({ message: 'Username is taken.' });
      }
      return User.create({ username, password: User.generateHash(password) })
        .then(newUser => res.json(newUser));
    });
  },
};
