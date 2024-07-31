const { test, expect } = require("@playwright/test");
const { signup, login } = require("../testHelpers/login.testHelper");
const { clearDb } = require("../testHelpers/clearDb");

const getUserInfoFor = (action) => {
  const payload = {
    username: "testuser1",
    name: "testuser1",
    password: "Hello123",
  };
  if (action !== "signup") {
    delete payload.name;
  }
  return payload;
};

const getBlogPayload = () => ({
  title: "testBlog-1",
  url: "http://www.testblog-1.com",
});

test.describe("blog app", () => {
  test.beforeEach(async ({ page }) => {
    await clearDb();
    await page.goto("http://localhost:5173");
  });

  test("Login Form is Shown", async ({ page }) => {
    await expect(page.getByTestId("loginForm")).toBeVisible();
    await expect(page.getByTestId("signupForm")).toBeHidden();
  });

  test.describe("User SignUp Test", () => {
    test("successful signup", async ({ page }) => {
      const signupInfo = getUserInfoFor("signup");
      await page.getByTestId("swithToSignUpFormButton").click();
      signupInfo.page = page;
      await signup(signupInfo);

      await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("successMessageDisplay")).toBeHidden();
    });

    test("unsuccessful signup", async ({ page }) => {
      const signupInfo = getUserInfoFor("signup");
      await page.getByTestId("swithToSignUpFormButton").click();
      signupInfo.page = page;
      await signup(signupInfo);

      await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("successMessageDisplay")).toBeHidden();

      await signup(signupInfo); // Trigger an error
      await expect(page.getByTestId("errorMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("errorMessageDisplay")).toBeHidden();
    });
  });

  test.describe("User Login Test", () => {
    test.beforeEach(async ({ page }) => {
      const signupInfo = getUserInfoFor("signup");
      await page.getByTestId("swithToSignUpFormButton").click();
      signupInfo.page = page;
      await signup(signupInfo);

      await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("successMessageDisplay")).toBeHidden();

      await page.getByTestId("swithToLoginFormButton").click();
    });

    test("successful login test", async ({ page }) => {
      const loginInfo = getUserInfoFor("login");
      loginInfo.page = page;
      await login(loginInfo);

      await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("successMessageDisplay")).toBeHidden();
    });

    test("unsuccessful login test", async ({ page }) => {
      const loginInfo = getUserInfoFor("login");
      loginInfo.page = page;
      loginInfo.password = "123";
      await login(loginInfo);

      await expect(page.getByTestId("errorMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("errorMessageDisplay")).toBeHidden();
    });
  });

  test.describe("When Logged In", () => {
    test.beforeEach(async ({ page }) => {
      const signupInfo = getUserInfoFor("signup");
      await page.getByTestId("swithToSignUpFormButton").click();
      signupInfo.page = page;
      await signup(signupInfo);

      await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("successMessageDisplay")).toBeHidden();

      await page.getByTestId("swithToLoginFormButton").click();
      const loginInfo = getUserInfoFor("login");
      loginInfo.page = page;
      await login(loginInfo);

      await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("successMessageDisplay")).toBeHidden();
    });

    test("landed on blog page after successful login", async ({ page }) => {
      const userInfo = getUserInfoFor("signup");
      await expect(page.getByRole("heading", { name: "blogs" })).toBeVisible();
      await expect(
        page.getByText(`${userInfo.name} is logged in !!`),
      ).toBeVisible();
    });

    test("a new blog can be created", async ({ page }) => {
      const { title, url } = getBlogPayload();

      await page.getByTestId("showVisibilityButton").click();

      await expect(page.getByTestId("blogForm")).toBeVisible();
      await page.getByTestId("blogFormTitleField").fill(title);
      await page.getByTestId("blogFormUrlField").fill(url);
      await page.getByTestId("postBlogButton").click();

      await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("blogList")).not.toBeEmpty();
      await expect(page.getByTestId("blogForm")).toBeHidden();
    });
  });
});
