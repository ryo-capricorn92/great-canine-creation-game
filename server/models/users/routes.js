const User = require('./model');

module.exports = {
  checkUsername: (req, res) => {
    User.findOne({ where: { username: req.params.username } })
      .then(user => res.json({ usernameIsUsed: !!user }));
  },
  checkEmail: (req, res) => {
    User.findOne({ where: { email: req.params.email } })
      .then(user => res.json({ emailIsUsed: !!user }));
  },
};
