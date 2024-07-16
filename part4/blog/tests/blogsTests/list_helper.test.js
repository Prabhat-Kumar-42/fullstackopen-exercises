const { test } = require("node:test");
const assert = require("node:assert");
const { dummy } = require("../../utils/blogsUtils/list_helper.js");

test("dummy test 1", () => {
  const blogs = {};
  assert.strictEqual(dummy(blogs), 1);
});
