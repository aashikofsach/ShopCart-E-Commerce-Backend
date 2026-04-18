const Sequalize = require("sequelize");

const db = require("../config/db_config");

const Order = db.define("order", {
  status: {
    type: Sequalize.ENUM({
      values: ["pending", "cancelled", "Successfull"],
    }),
    allowNull: false,
  }
});

module.exports = Order;
