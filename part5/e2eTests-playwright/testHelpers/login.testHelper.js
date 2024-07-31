const login = async ({ page, username, password }) => {
  await page.getByTestId("loginForm");
  await page.getByTestId("loginFormUserNameField").fill(username);
  await page.getByTestId("loginFormPasswordField").fill(password);
  await page.getByTestId("loginFormSubmitButton").click();
};

const signup = async ({ page, username, name, password }) => {
  await page.getByTestId("signupForm");
  await page.getByTestId("signupFormUserNameField").fill(username);
  await page.getByTestId("signupFormNameField").fill(name);
  await page.getByTestId("signupFormPasswordField").fill(password);
  await page.getByTestId("signupFormSubmitButton").click();
};

const createBlog = async ({ page, title, url }) => {
  await page.getByTestId("blogForm");
  await page.getByTestId("showVisibilityButton").click();
  await page.getByTestId("blogFormTitleField").fill(title);
  await page.getByTestId("blogFormUrlField").fill(url);
  await page.getByTestId("postBlogButton").click();
};

module.exports = {
  signup,
  login,
  createBlog,
};
