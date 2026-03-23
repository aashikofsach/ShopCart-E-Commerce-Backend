const Sequalize = require("sequelize");

const db = require("../config/db_config");

const Product = db.define("product", {
  title: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequalize.INTEGER,
    allowNull: false,
  },
  image: {
    type: Sequalize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
