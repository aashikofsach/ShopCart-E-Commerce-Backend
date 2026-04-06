const Category = require("./categories");
const Product = require("./products");
const User = require("./user");
const Cart = require("./cart");

Product.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Product, {
  foreignKey: "categoryId",
});

module.exports = {
  Product,
  Category,
  User,
  Cart
}; 
