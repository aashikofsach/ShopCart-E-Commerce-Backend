const Category = require("./categories");
const Product = require("./products");
const User = require("./user");
const Cart = require("./cart");
const CartProducts = require("./cart_products");
const Order = require("./order");
const OrderProducts = require("./order_products");

Category.hasMany(Product, {
  foreignKey: "categoryId",
});
Product.belongsTo(Category, { foreignKey: "categoryId" });

User.hasOne(Cart);
Cart.belongsTo(User, {
  foreignKey: "userId",
});

// many to Many
Cart.belongsToMany(Product, { through: CartProducts });
Product.belongsToMany(Cart, { through: CartProducts });

User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

Order.belongsToMany(Product, { through: OrderProducts });
Product.belongsToMany(Order, { through: OrderProducts });

module.exports = {
  Product,
  Category,
  User,
  Cart,
  CartProducts,
  Order,
  OrderProducts,
};
