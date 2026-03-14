const express = require("express");

const router = express.Router();
const { router: pingRoutes } = require("./v1/ping_routes");
const {router : pingRoutesV2} = require("./v2/ping_routes_v2")
const v1Routes = require("./v1/index");
const v2Routes = require("./v2/index");

router.use("/v1", v1Routes);
router.use("/v2", v2Routes);

module.exports = {
  router,
};
