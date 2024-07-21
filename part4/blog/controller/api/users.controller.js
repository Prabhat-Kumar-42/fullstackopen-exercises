const User = require("../../models/user.model");
const { passwordValidation } = require("../../utils/passwordValidation");
const throwError = require("../../utils/throwError");

const handleSignUp = async (req, res) => {
  if (!req.body) throwError("400", "Bad Request");
  const { username, password, name } = req.body;
  const validation = passwordValidation(password);
  if (!validation.status) throwError(400, validation.message);
  // password hash is handeled by model schema, look at schema code for more details
  const user = await User.create({
    username,
    name,
    hashedPassword: password,
  });
  return res.status(201).json({ message: "created", user });
};

const handleLogin = async (req, res) => {
  if (!req.body) throwError("400", "Bad Request");
  const { username, password } = req.body;
  // incorrect password is handeled by model schema, look at schema code for more details
  const user = await User.matchPassword(username, password);
  return res.status(200).json({ message: "login success", user });
};

module.exports = {
  handleLogin,
  handleSignUp,
};
