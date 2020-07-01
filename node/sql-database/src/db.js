const { Sequelize } = require('sequelize');
// const userModel = require('./models/user.model');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection established successfully');
//   } catch (error) {
//     console.log('Something went wrong!', error);
//   }
// }

const db = {
  Sequelize,
  sequelize,
};

db.User = db.sequelize.import(
  'user',
  // userModel,
  require('./models/user.model'),
);

module.exports = db;
