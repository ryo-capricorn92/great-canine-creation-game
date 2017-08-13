const Sequelize = require('sequelize');
const db = require('../../db');

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

module.exports = User;
