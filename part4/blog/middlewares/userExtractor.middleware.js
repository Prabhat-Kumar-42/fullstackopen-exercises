const { verifyToken } = require("../utils/authToken.util");

const userExtractor = (req, res, next) => {
  const user = verifyToken(req.token);
  req.user = user;
  next();
};

module.exports = {
  userExtractor,
};
