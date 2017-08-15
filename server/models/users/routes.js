const User = require('./model');

module.exports = {
  test: (req, res) => {
    console.log('IN TEST');
    User.findAll().then((users) => {
      console.log(req.session);
      console.log(req.user);
      return res.json(users);
    });
  },
};
