const CategoryController = require("./category_controller");
const ProductController = require("./product_controller");
const pingController = require("./ping_controller");
const UserController = require("./user_controller");
const CartController = require("./cart_controller");
const OrderController = require("./order_controller")

module.exports = {
  CategoryController,
  ProductController,
  PingController: pingController,
  UserController,
  CartController,
  OrderController
};
