const Category = require("./categories");
const Product = require("./products");
const User = require("./user");
const Cart = require("./cart");

Category.hasMany(Product, {
  foreignKey: "categoryId",
});
Product.belongsTo(Category, { foreignKey: "categoryId" });

User.hasOne(Cart);
Cart.belongsTo(User , {
  foreignKey : "userId"
})

module.exports = {
  Product,
  Category,
  User,
  Cart
}; 
