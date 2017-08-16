const User = require('./model');

module.exports = {
  test: (req, res) => {
    User.findAll().then(users => res.json(users));
  },
};
