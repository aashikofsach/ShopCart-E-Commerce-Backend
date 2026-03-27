const express = require("express");
const { createProduct , getProducts , getProduct, destroyProduct} = require("../../controllers/product_controller");
const { pingController } = require("../../controllers/ping_controller");
const {
  createProductvalidator,
} = require("./../../middlewares/product_middleware");

const router = express.Router();

// router.get("/", pingController);
router.get("/",getProducts)
router.get("/:id", getProduct);
router.post("/", createProductvalidator, createProduct);
router.delete("/:id",destroyProduct)


module.exports = { router };

//9818060663