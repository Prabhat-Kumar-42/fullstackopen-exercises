const throwError = require("../utils/throwError");

const tokenExtractor = (req, res, next) => {
  const authScheme = "Bearer";
  const authorization = req.get("authorization");

  if (!authorization || !authorization.startsWith(authScheme + " ")) {
    throwError(401, "Login required");
  }

  const token = authorization.slice(authScheme.length + 1);
  req.token = token;
  next();
};

module.exports = {
  tokenExtractor,
};
