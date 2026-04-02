const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_FORCE : process.env.DB_FORCE,
  DB_ALTER : process.env.DB_ALTER,
  SALT_ROUND : process.env.SALT_ROUND,
  JWT_SECRET : process.env.JWT_SECRET,
  JWT_EXPIRY : process.env.JWT_EXPIRY,
  NODE_ENV : process.env.NODE_ENV
};
