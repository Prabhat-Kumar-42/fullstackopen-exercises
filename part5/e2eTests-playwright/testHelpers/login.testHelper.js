const login = (page, username, password) => {};

const signup = async ({ page, username, name, password }) => {
  //await page.goto("http://localhost:5173/");
  await page.getByTestId("singpForm");
  await page.getByTestId("signupFormUserNameField").fill(username);
  await page.getByTestId("signupFormNameField").fill(name);
  await page.getByTestId("signupFormPasswordField").fill(password);
  await page.getByTestId("signupFormSubmitButton").click();
};

module.exports = {
  signup,
};
