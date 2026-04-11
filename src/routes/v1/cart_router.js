const express = require("express");

const { CartController } = require("../../controllers");
const { updateCart } = CartController;
const cartRouter = express.Router();

// router.get("/", pingController);
cartRouter.patch("/:id", updateCart);

module.exports = { cartRouter };
