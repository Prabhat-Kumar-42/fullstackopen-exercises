const express = require("express");
const {
  handleLogin,
  handleSignUp,
} = require("../../controller/api/users.controller");
const router = express.Router();

router.route("/login").post(handleLogin);
router.route("/signup").post(handleSignUp);

module.exports = router;
