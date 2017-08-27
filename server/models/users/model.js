const Sequelize = require('sequelize');
const bluebird = require('bluebird');
const bcrypt = bluebird.promisifyAll(require('bcrypt-nodejs'));
const db = require('../../db');

/* User model */
const User = db.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  username: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  companion: Sequelize.STRING,
});

/* User methods */
User.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.isEmailOrUsernameTake = (email, username) =>
  User.findOne({ where: { email } }).then((user) => {
    if (user) { return true; }

    return User.findOne({ where: { username } }).then((user) => { // eslint-disable-line no-shadow
      if (user) { return true; }

      return false;
    });
  });

User.prototype.validPassword = function validPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
