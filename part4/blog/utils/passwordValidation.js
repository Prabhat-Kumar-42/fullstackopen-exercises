const passwordValidation = (password) => {
  const status = password.length >= 3;
  const message = status
    ? "passed"
    : "password must contain at least 3 characters";
  return { status, message };
};

module.exports = {
  passwordValidation,
};
