const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const generateToken = (user) => {
  const userData = {
    id: user.id,
    username: user.username,
  };
  const token = jwt.sign(userData, JWT_SECRET_KEY);
  return token;
};

module.exports = {
  generateToken,
};
