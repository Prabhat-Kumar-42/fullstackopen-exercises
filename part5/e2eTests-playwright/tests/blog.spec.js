const { test } = require("@playwright/test");
const { signup } = require("../testHelpers/login.testHelper");
const { clearDb } = require("../testHelpers/clearDb");

const getLoginSignUpPayload = (action) => {
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
      const signupInfo = getLoginSignUpPayload("signup");
      await page.getByRole("button", { name: "Sign Up" }).click();
      signupInfo.page = page;
      await signup(signupInfo);
    });
  });
});
