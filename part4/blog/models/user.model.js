const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const throwError = require("../utils/throwError");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: [3, "must be at least 3 char long"],
    required: [true, "username is required"],
    unique: true,
  },
  name: {
    type: String,
  },
  hashedPassword: {
    type: String,
    required: [true, "username is required"],
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("hashedPassword")) return next();
  const hashRounds = 10;
  const hashedPassword = await bcrypt.hash(user.hashedPassword, hashRounds);
  user.hashedPassword = hashedPassword;
  next();
});

userSchema.statics.matchPassword = async function (username, password) {
  if (!username || !password)
    throwError(400, "username and password are required field");
  const user = this.find({ username });
  if (!user) throwError(404, "Not Found");
  (await bcrypt.compare(password, user.hashedPassword))
    ? user
    : throwError(400, "incorrect email or password");
};

const User = mongoose.model("user", userSchema);

module.exports = User;
