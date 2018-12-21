const Sequelize = require('sequelize');

const sequelize = new Sequelize('democloud', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
