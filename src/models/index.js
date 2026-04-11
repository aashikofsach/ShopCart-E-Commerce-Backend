const Category = require("./categories");
const Product = require("./products");
const User = require("./user");
const Cart = require("./cart");
const CartProducts = require( "./cart_products");

Category.hasMany(Product, {
  foreignKey: "categoryId",
});
Product.belongsTo(Category, { foreignKey: "categoryId" });

User.hasOne(Cart);
Cart.belongsTo(User , {
  foreignKey : "userId"
})

// many to Many 
Cart.belongsToMany(Product, {through : CartProducts});
Product.belongsToMany(Cart, {through : CartProducts})

module.exports = {
  Product,
  Category,
  User,
  Cart,
  CartProducts
}; 
