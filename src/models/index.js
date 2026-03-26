const Category = require("./categories");
const Product = require("./products");

Product.belongsTo(Category);
Category.hasMany(Product, {
  foreignKey: "categoryId",
});

module.exports = {
  Product,
  Category,
};
