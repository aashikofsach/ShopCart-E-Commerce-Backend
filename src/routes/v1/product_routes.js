const express = require("express");
const { createProduct , getProducts , getProduct} = require("../../controllers/product_controller");
const { pingController } = require("../../controllers/ping_controller");
const {
  createProductvalidator,
} = require("./../../middlewares/product_middleware");

const router = express.Router();

// router.get("/", pingController);
router.get("/",getProducts)
router.get("/:id", getProduct);
router.post("/", createProductvalidator, createProduct);

module.exports = { router };

//9818060663