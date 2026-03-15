const express = require("express");
const { pingController } = require("../../controllers/ping_controller");

const router = express.Router();

function checkRequest(req, res, next) {
  console.log("this is check middleware");
  next();
  console.log("ending checkRequest");
}

function logger(req, res, next) {
  console.log("Inside the logger middleware");
  next();
  console.log("ending logger ");
}

function authChecker(req, res, next) {
  console.log("this is authChecker middleware");
  next();
  console.log("ending the authChecker");
}

router.get("/", checkRequest, logger, authChecker, pingController);

module.exports = { router };
