const login = (page, username, password) => {};

const signup = async ({ page, username, name, password }) => {
  //await page.goto("http://localhost:5173/");
  await page
    .getByTestId("singpForm")
    .locator("div")
    .filter({ hasText: "username:" })
    .getByRole("textbox")
    .fill(username);
  await page.getByRole("textbox").nth(1).fill(name);
  await page.locator('input[type="password"]').fill(password);
  await page.getByRole("button", { name: "submit" }).click();
  await page.getByText("signup successfull");
};

module.exports = {
  signup,
};
