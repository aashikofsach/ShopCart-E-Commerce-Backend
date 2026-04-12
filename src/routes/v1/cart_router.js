const express = require("express");

const { CartController } = require("../../controllers");
const { isLoggedIn } = require("../../middlewares/auth_middleware");
const { updateCart } = CartController;
const cartRouter = express.Router();

// router.get("/", pingController);
cartRouter.patch("/:id",isLoggedIn, updateCart);

module.exports = { cartRouter };
