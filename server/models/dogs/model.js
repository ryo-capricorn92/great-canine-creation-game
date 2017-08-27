const Sequelize = require('sequelize');
const db = require('../../db');

const Dog = db.define('dog', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  gender: Sequelize.STRING,
  attr: Sequelize.JSON,
  image: Sequelize.STRING,
  cooldown: Sequelize.DATE,
  companion: Sequelize.BOOLEAN,
});

module.exports = Dog;
