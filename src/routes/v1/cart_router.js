const express = require("express");

const { CartController } = require("../../controllers");
const { isLoggedIn } = require("../../middlewares/auth_middleware");
const { updateCart , getCartProducts , clearCart} = CartController;
const cartRouter = express.Router();

// router.get("/", pingController);
cartRouter.patch("/:id",isLoggedIn, updateCart);
cartRouter.get("/:id/products" ,isLoggedIn ,  getCartProducts)
cartRouter.delete("/:id/products" ,isLoggedIn ,  clearCart)


module.exports = { cartRouter };
