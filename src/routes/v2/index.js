const express = require('express');

const v2Routes = express.Router();

const {router : pingRoutesV2} = require("./pingRoutesV2")

v2Routes.use("/ping", pingRoutesV2)


module.exports = v2Routes ;
