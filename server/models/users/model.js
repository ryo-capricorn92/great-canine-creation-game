const Sequelize = require('sequelize');
const bluebird = require('bluebird');
const bcrypt = bluebird.promisifyAll(require('bcrypt-nodejs'));
const db = require('../../db');

/* User model */
const User = db.define('user', {
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

User.prototype.validPassword = function validPassword(password) {
  console.log('TESTING 3');
  console.log(this);
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
