const Sequalize = require("sequelize");

const db = require("../config/db_config");

const Category = db.define("category", {
  name: {
    type: Sequalize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequalize.STRING,
    allowNull: false,
  },
});

module.exports = Category;