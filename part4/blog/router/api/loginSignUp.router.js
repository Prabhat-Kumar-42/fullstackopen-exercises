const express = require("express");
const {
  handleLogin,
  handleSignUp,
  handleGetAllUser,
  handleGetSpecificUser,
} = require("../../controller/api/users.controller");
const {
  tokenExtractor,
} = require("../../middlewares/tokenExtractor.middleware");
const router = express.Router();

router.route("/login").post(handleLogin);
router.route("/signup").post(handleSignUp);

router.route("/").get(tokenExtractor, handleGetAllUser);
router.route("/:id").get(tokenExtractor, handleGetSpecificUser);

module.exports = router;
