const User = require("../../models/user.model");
const { generateToken } = require("../../utils/authToken.util");
const { passwordValidation } = require("../../utils/passwordValidation");
const throwError = require("../../utils/throwError");

const handleGetAllUser = async (req, res) => {
  const users = await User.find({}).populate("blogs");
  return res.status(200).json({ message: "success", users });
};

const handleGetSpecificUser = async (req, res) => {
  const userId = req.body.userId;
  if (!userId) throwError(400, "Bad Request");
  const user = await User.findById(userId).populate("blogs");
  return res.status(200).json({ message: "success", user });
};

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
  const authToken = generateToken(user);
  const userForResponse = user.toJSON();
  userForResponse.authToken = authToken;
  return res
    .status(200)
    .json({ message: "login success", user: userForResponse });
};

module.exports = {
  handleLogin,
  handleSignUp,
  handleGetAllUser,
  handleGetSpecificUser,
};
