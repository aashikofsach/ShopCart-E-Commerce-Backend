const Sequalize = require("sequelize");

const db = require("../config/db_config");

const OrderProducts = db.define("orderproducts", {
  orderId: {
    type: Sequalize.INTEGER,
    allowNull: false,
    references: {
      model: "Orders",
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
  quantity: {
    type: Sequalize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

module.exports = OrderProducts;
