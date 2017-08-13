const Sequelize = require('sequelize');
const settings = require('./settings');

const url = process.env.DATABASE_URL || settings.DBURL;

const options = process.env.DATABSE_URL ? {
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
} : {
  logging: false,
};

const db = new Sequelize(url, options);

module.exports = db;
