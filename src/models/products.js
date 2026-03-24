const Sequalize = require("sequelize");

const db = require("../config/db_config");
const Category = require("./categories");

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
  categoryId : {
    type : Sequalize.INTEGER,
    allowNull : false,
    references : {
      model : "categories",
      key : "id"
    }
  }
});

module.exports = Product;
