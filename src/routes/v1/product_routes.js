const express = require("express");
const { createProduct } = require("../../controllers/product_controller");
const { pingController } = require("../../controllers/ping_controller");
const {
  createProductvalidator,
} = require("./../../middlewares/product_middleware");

const router = express.Router();

router.get("/", pingController);
router.post("/", createProductvalidator, createProduct);

module.exports = { router };
