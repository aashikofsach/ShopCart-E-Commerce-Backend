const express = require("express");
const {
  createCategory,
  getCategories,
  getCategory,
  destroyCategory,
  getProductForCategoryId,
} = require("../../controllers/category_controller");
const { pingController } = require("../../controllers/ping_controller");
const {
  createProductvalidator,
} = require("./../../middlewares/product_middleware");

const {
  createCategoryValidator,
} = require("../../middlewares/category_middleware");
const categoryRouter = express.Router();

// router.get("/", pingController);
categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/", createCategoryValidator, createCategory);
categoryRouter.delete("/:id", destroyCategory);
categoryRouter.get("/:id/products", getProductForCategoryId);

module.exports = { categoryRouter };
 