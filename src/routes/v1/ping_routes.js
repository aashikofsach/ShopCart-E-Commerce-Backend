const express = require("express");
const {PingController} = require("../../controllers")

const {pingCheck} = PingController
// const { pingController } = require("../../controllers/ping_controller");

const router = express.Router();


router.get("/", pingCheck);

module.exports = { router };
