const Sequalize = require("sequelize");

const db = require("../config/db_config");

const CartProducts = db.define("cartproducts", {
  cartId: {
    type: Sequalize.INTEGER,
    allowNull: false,
    references: {
      model: "Carts",
      key: "id",
    },
  },
  productId: {
    type: Sequalize.INTEGER,
    allowNull: false,
    references: {
      model: "Products",
      key: "id",
    },
  },
  quantity : {
    type : Sequalize.INTEGER,
    allowNull : false,
    defaultValue : 1
  }
});


module.exports = CartProducts ;
