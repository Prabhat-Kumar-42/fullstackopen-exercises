import BlogForm from "./BlogForm";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import blogServices from "../../services/blogs";

const mockPostResponse = {
  title: "test blog",
  url: "https://testBlogUrl.com",
  author: { name: "L" },
};

vi.spyOn(blogServices, "postBlog").mockResolvedValue(mockPostResponse);

test("blog form calls event handler with right input", async () => {
  const user = userEvent.setup();

  const mockSetBlogs = vi.fn();
  const mockHandleSuccessMessage = vi.fn();
  const mockHandleErrorMessage = vi.fn();

  const title = "test blog";
  const url = "https://testBlogUrl.com";

  const mockBlogList = [];

  render(
    <BlogForm
      blogs={mockBlogList}
      setBlogs={mockSetBlogs}
      handleErrorMessage={mockHandleErrorMessage}
      handleSuccessMessage={mockHandleSuccessMessage}
    />,
  );

  const titleLabelElement = await screen.findByText("title:");
  const titleField = titleLabelElement.nextElementSibling;
  const urlLabelElement = await screen.findByText("url:");
  const urlField = urlLabelElement.nextElementSibling;

  const submitButtonElement = await screen.findByText("submit");

  await user.type(titleField, title);
  await user.type(urlField, url);
  await user.click(submitButtonElement);

  expect(blogServices.postBlog).toHaveBeenCalledWith({
    title: "test blog",
    url: "https://testBlogUrl.com",
  });

  expect(mockSetBlogs).toHaveBeenCalledWith([
    {
      title: "test blog",
      url: "https://testBlogUrl.com",
      author: { name: "L" },
    },
  ]);

  expect(mockHandleSuccessMessage).toHaveBeenCalledWith(
    "test blog by L created.",
    3000,
  );

  expect(mockHandleErrorMessage).not.toHaveBeenCalled();
});
