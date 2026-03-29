const Sequalize = require("sequelize");

const db = require("../config/db_config");

const User = db.define("user", {
  email: {
    type: Sequalize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequalize.STRING,
    allowNull: false,
    validate: {
      len: [3, 30],
      isAlphanumeric: true,
    },
  },
});

module.exports = User;
