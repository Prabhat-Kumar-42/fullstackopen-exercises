const { test, describe } = require("node:test");
const assert = require("node:assert");
const { dummy } = require("../../../../utils/blogsUtils/list_helper.js");

const listHelperTest = () => {
  test("dummy test 1", () => {
    const blogs = {};
    assert.strictEqual(dummy(blogs), 1);
  });
};

module.exports = listHelperTest;
