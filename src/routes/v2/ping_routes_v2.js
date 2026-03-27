const express = require("express");

const {PingController} = require( "../../controllers")
// const { pingControllerV2 } = require("../../controllers/ping_controller");
const {pingCheckV2} = PingController

const router = express.Router() ;


router.get("/", pingCheckV2);

module.exports = {router};