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

const getBlogPayload = () => {
  const payload = {
    title: "testBlog-1",
    url: "http://www.testblog-1.com",
  };
  return payload;
};

test.describe("blog app", () => {
  test.beforeEach(async ({ page }) => {
    await clearDb();
    await page.goto("http://localhost:5173");
  });

  test("Login Form is Shown", async ({ page }) => {
    await page.getByTestId("loginForm").isVisible();
    await page.getByTestId("signupForm").isHidden();
  });

  test.describe("User SignUp Test", async () => {
    test("successfull signup", async ({ page }) => {
      const signupInfo = getUserInfoFor("signup");
      await page.getByTestId("swithToSignUpFormButton").click();
      signupInfo.page = page;
      await signup(signupInfo);
      await page.getByTestId("successMessageDisplay");
    });

    test("unsuccessfull signup", async ({ page }) => {
      const signupInfo = getUserInfoFor("signup");
      await page.getByTestId("swithToSignUpFormButton").click();
      signupInfo.page = page;
      await signup(signupInfo);
      await page.getByTestId("successMessageDisplay");
      await signup(signupInfo);
      await page.getByTestId("errorMessageDisplay");
    });
  });

  test.describe("User Login Test", async () => {
    test.beforeEach(async ({ page }) => {
      const signupInfo = getUserInfoFor("signup");
      await page.getByTestId("swithToSignUpFormButton").click();
      signupInfo.page = page;
      await signup(signupInfo);
      await page.getByTestId("swithToLoginFormButton").click();
    });
    test("successfull login test", async ({ page }) => {
      const loginInfo = getUserInfoFor("login");
      loginInfo.page = page;
      await login(loginInfo);
      await page.getByTestId("successMessageDisplay");
    });

    test("unsuccessfull login test", async ({ page }) => {
      const loginInfo = getUserInfoFor("login");
      loginInfo.page = page;
      loginInfo.password = "123";
      await login(loginInfo);
      await page.getByTestId("errorMessageDisplay");
    });
  });

  test.describe("When Logged In", async () => {
    test.beforeEach(async ({ page }) => {
      const signupInfo = getUserInfoFor("signup");
      await page.getByTestId("swithToSignUpFormButton").click();
      signupInfo.page = page;
      await signup(signupInfo);
      await page.getByTestId("swithToLoginFormButton").click();
      const loginInfo = getUserInfoFor("login");
      loginInfo.page = page;
      await login(loginInfo);
    });

    test("landed on blog page after successfull login", async ({ page }) => {
      const userInfo = getUserInfoFor("signup");
      await page.getByRole("heading", { name: "blogs" });
      expect(page.getByText(`${userInfo.name} is logged in !!}`));
    });

    test("a new blog can be created", async ({ page }) => {
      const { title, url } = getBlogPayload();
      await page.getByTestId("blogForm");
      await page.getByTestId("showVisibilityButton").click();
      await page.getByTestId("blogFormTitleField").fill(title);
      await page.getByTestId("blogFormUrlField").fill(url);
      await page.getByTestId("successMessageDisplay");
      await page.getByText(/{title}/i);
      await page.getByText(/{url}/i);
    });
  });
});
