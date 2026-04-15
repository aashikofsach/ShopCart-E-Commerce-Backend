const express = require("express");
const { pingCheck, pingAuthChecker } = require("../../controllers/ping_controller");
const { isLoggedIn } = require("../../middlewares/auth_middleware");

const router = express.Router();




router.get("/", pingCheck);
router.get("/authping",isLoggedIn ,  pingAuthChecker)

module.exports = { router };
