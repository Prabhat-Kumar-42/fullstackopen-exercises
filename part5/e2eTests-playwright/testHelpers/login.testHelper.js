const { expect } = require("@playwright/test");

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

const logout = async (page) => {
  const logoutButton = await page.getByTestId("logoutButton");
  expect(logoutButton).toBeVisible();
  await logoutButton.click();
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  await expect(page.getByTestId("loginForm")).toBeVisible();
  await expect(page.getByTestId("signupForm")).toBeHidden();
};

const signupAndLogin = async (userInfo) => {
  const { page } = userInfo;
  await page.getByTestId("swithToSignUpFormButton").click();
  await signup(userInfo);

  await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
  await expect(page.getByTestId("successMessageDisplay")).toBeHidden();

  await page.getByTestId("swithToLoginFormButton").click();

  await login(userInfo);

  await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
  await expect(page.getByTestId("successMessageDisplay")).toBeHidden();
};

const createBlog = async ({ page, title, url }) => {
  await page.getByTestId("showBlogFormButton").click();

  await expect(page.getByTestId("blogForm")).toBeVisible();
  await page.getByTestId("blogFormTitleField").fill(title);
  await page.getByTestId("blogFormUrlField").fill(url);

  await page.getByTestId("postBlogButton").click();

  await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
  await expect(page.getByTestId("successMessageDisplay")).toBeHidden();

  await expect(page.getByTestId("blogForm")).toBeHidden();
};

module.exports = {
  signup,
  login,
  logout,
  signupAndLogin,
  createBlog,
};
