const express = require("express");


const { UserController } = require("../../controllers");
const {
  createUser,
} = UserController;

// const { pingController } = require("../../controllers/ping_controller");
// const {
//   createProductvalidator,
// } = require("./../../middlewares/product_middleware");

const userRouter = express.Router();

userRouter.post("/", createUser);


module.exports = { userRouter };
