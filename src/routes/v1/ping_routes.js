const express = require("express");
const {PingController} = require("../../controllers");
const { pingAuthChecker } = require("../../controllers/ping_controller");
const { isLoggedIn } = require("../../middlewares/auth_middleware");

const {pingCheck} = PingController
// const { pingController } = require("../../controllers/ping_controller");

const router = express.Router();


router.get("/", pingCheck);
router.get("/authping",isLoggedIn ,  pingAuthChecker)

module.exports = { router };
