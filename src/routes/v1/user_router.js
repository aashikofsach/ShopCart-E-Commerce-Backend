const express = require("express");

const { UserController } = require("../../controllers");
const { createUser, signInUser } = UserController;

// const { pingController } = require("../../controllers/ping_controller");
// const {
//   createProductvalidator,
// } = require("./../../middlewares/product_middleware");

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.post("/signin", signInUser);

module.exports = { userRouter };
