const express = require("express");
const {
  handleReset,
} = require("../../controller/testControllers/api/test.controller");

const testRouter = express.Router();

testRouter.route("/reset").delete(handleReset);

module.exports = {
  testRouter,
};
