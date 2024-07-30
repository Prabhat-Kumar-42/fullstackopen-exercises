const login = async ({ page, username, password }) => {
  await page.getByTestId("loginForm");
  await page.getByTestId("loginFormUserNameField").fill(username);
  await page.getByTestId("loginFormPasswordField").fill(password);
  await page.getByTestId("loginFormSubmitButton").click();
};

const signup = async ({ page, username, name, password }) => {
  //await page.goto("http://localhost:5173/");
  await page.getByTestId("signupForm");
  await page.getByTestId("signupFormUserNameField").fill(username);
  await page.getByTestId("signupFormNameField").fill(name);
  await page.getByTestId("signupFormPasswordField").fill(password);
  await page.getByTestId("signupFormSubmitButton").click();
};

module.exports = {
  signup,
  login,
};
