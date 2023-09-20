// Import the Sequelize library
const Sequelize = require('sequelize');

// Load environment variables from .env file (using dotenv library)
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

// Export the sequelize instance to be used in application
module.exports = sequelize;