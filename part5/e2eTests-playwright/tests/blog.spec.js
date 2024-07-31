const { test, expect } = require("@playwright/test");
const {
  signup,
  login,
  signupAndLogin,
  createBlog,
  logout,
} = require("../testHelpers/login.testHelper");
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
  title: "test-blog-1",
  url: "http://www.testblog-1.com",
});

const setBlogPayload = (blog, title, url) => {
  blog.title = title;
  blog.url = url;
};

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

      await signup(signupInfo);
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
      signupInfo.page = page;
      await signupAndLogin(signupInfo);
    });

    test("logout test", async ({ page }) => {
      await logout(page);
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

      await page.getByTestId("showBlogFormButton").click();
      await expect(page.getByTestId("blogForm")).toBeVisible();

      await page.getByTestId("blogFormTitleField").fill(title);
      await page.getByTestId("blogFormUrlField").fill(url);

      await page.getByTestId("postBlogButton").click();

      await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("successMessageDisplay")).toBeHidden();

      await expect(page.getByTestId(title)).not.toBeEmpty();
      await expect(page.getByTestId("blogForm")).toBeHidden();
    });

    test("blog can be liked", async ({ page }) => {
      const blogPayload = getBlogPayload();
      blogPayload.page = page;
      await createBlog(blogPayload);

      const blogElement = page.getByTestId(blogPayload.title);
      await blogElement.getByTestId("showBlogDetailsButton").click();

      const likesCount = await blogElement.getByTestId("likeCount");
      await expect(likesCount).toHaveText(/0/);

      const likeButton = await blogElement.getByTestId("updateLikeButton");
      await likeButton.click();

      await expect(likesCount).toHaveText(/1/);

      await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("successMessageDisplay")).toBeHidden();

      // Ended with this so when testing in up, the test does not end in white page
      await expect(page.getByRole("heading", { name: "blogs" })).toBeVisible();
    });

    test("blog can be deleted by it's creator", async ({ page }) => {
      page.on("dialog", async (dialog) => {
        if (dialog.type() === "confirm") {
          await dialog.accept();
        }
      });

      const blogPayload = getBlogPayload();
      blogPayload.page = page;
      await createBlog(blogPayload);

      const blogElement = await page.getByTestId(blogPayload.title);
      await blogElement.getByTestId("showBlogDetailsButton").click();

      const deleteBlogButton =
        await blogElement.getByTestId("deleteBlogButton");
      await deleteBlogButton.click();

      await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
      await expect(page.getByTestId("successMessageDisplay")).toBeHidden();

      await expect(blogElement).toHaveCount(0);

      // Ended with this so when testing in up, the test does not end in white page
      await expect(page.getByRole("heading", { name: "blogs" })).toBeVisible();
    });

    test(`only user who add the blog can see the delete 
          button of the respective blog`, async ({ page }) => {
      const blogPayload = getBlogPayload();
      blogPayload.page = page;
      await createBlog(blogPayload);

      await expect(page.getByTestId(blogPayload.title)).not.toBeEmpty();

      await logout(page);

      const otherUserInfo = {
        username: "testuser2",
        name: "testuser2",
        password: "Hello123",
        page: page,
      };

      await signupAndLogin(otherUserInfo);

      const blogElement = await page.getByTestId(blogPayload.title);
      await blogElement.getByTestId("showBlogDetailsButton").click();
      const deleteBlogButton =
        await blogElement.getByTestId("deleteBlogButton");
      await expect(deleteBlogButton).toBeHidden();

      // Ended with this so when testing in up, the test does not end in white page
      await expect(page.getByRole("heading", { name: "blogs" })).toBeVisible();
    });

    test(`blogs are arranged in descending order according to likes`, async ({
      page,
    }) => {
      const blogPayload = getBlogPayload();
      blogPayload.page = page;

      await createBlog(blogPayload);
      setBlogPayload(blogPayload, "test-blog-2", "test-blog-2-url");
      await createBlog(blogPayload);
      setBlogPayload(blogPayload, "test-blog-3", "test-blog-3-url");
      await createBlog(blogPayload);

      const firstBlog = await page.getByTestId("test-blog-1");
      await firstBlog.getByTestId("showBlogDetailsButton").click();
      for (let i = 0; i < 2; i++) {
        await firstBlog.getByTestId("updateLikeButton").click();
        await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
        await expect(page.getByTestId("successMessageDisplay")).toBeHidden();
      }

      const thirdBlog = await page.getByTestId("test-blog-3");

      await thirdBlog.getByTestId("showBlogDetailsButton").click();
      for (let i = 0; i < 3; i++) {
        await thirdBlog.getByTestId("updateLikeButton").click();
        await expect(page.getByTestId("successMessageDisplay")).toBeVisible();
        await expect(page.getByTestId("successMessageDisplay")).toBeHidden();
      }

      const blogElements = page.locator('[data-testid^="test-blog-"]');

      const likes = [];
      for (let i = 0; i < (await blogElements.count()); i++) {
        const blog = blogElements.nth(i);
        const likeCount = await blog
          .locator('[data-testid="likeCount"]')
          .innerText();
        likes.push(parseInt(likeCount, 10));
      }

      const sortedLikes = [...likes].sort((a, b) => b - a);
      expect(likes).toEqual(sortedLikes);

      // Ended with this so when testing in up, the test does not end in white page
      await expect(page.getByRole("heading", { name: "blogs" })).toBeVisible();
    });
  });
});
