const Category = require("./categories");
const Product = require("./products");
const User = require("./user");

Product.belongsTo(Category);
Category.hasMany(Product, {
  foreignKey: "categoryId",
});

module.exports = {
  Product,
  Category,
  User
};
