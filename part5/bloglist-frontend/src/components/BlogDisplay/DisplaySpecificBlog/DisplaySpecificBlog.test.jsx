import { render, screen } from "@testing-library/react";
import DisplaySpecificBlog from "./DisplaySpecificBlog";
import userEvent from "@testing-library/user-event";
import blogServices from "../../../services/blogs";

vi.spyOn(blogServices, "updateBlog").mockResolvedValue(true);

test("blog renders title and author but not url and likes by default", () => {
  const mockHandleSuccessMessage = vi.fn();
  const mockHandleErrorMessage = vi.fn();
  const mockHandleUpdates = vi.fn();

  const mockBlog = {
    title: "test blog",
    url: "https://testBlogUrl.com",
    likes: 7,
    author: {
      name: "L",
      id: "3181979",
    },
  };

  const mockUser = {
    name: "L",
    id: "3181979",
  };

  const { container } = render(
    <DisplaySpecificBlog
      user={mockUser}
      blog={mockBlog}
      handleSuccessMessage={mockHandleSuccessMessage}
      handleErrorMessage={mockHandleErrorMessage}
      handleUpdates={mockHandleUpdates}
    />,
  );

  const titleElement = container.querySelector(".title");
  const authorElement = container.querySelector(".author");
  const urlElement = container.querySelector(".url");
  const likesElement = container.querySelector(".likes");

  expect(titleElement).toBeDefined();
  expect(authorElement).toBeDefined();
  expect(urlElement).not.toBeVisible();
  expect(likesElement).not.toBeVisible();
});

test("url and likes are visible after clicking the button controlling their visibility", async () => {
  const user = userEvent.setup();
  const mockHandleSuccessMessage = vi.fn();
  const mockHandleErrorMessage = vi.fn();
  const mockHandleUpdates = vi.fn();

  const mockBlog = {
    title: "test blog",
    url: "https://testBlogUrl.com",
    likes: 7,
    author: {
      name: "L",
      id: "3181979",
    },
  };

  const mockUser = {
    name: "L",
    id: "3181979",
  };

  const { container } = render(
    <DisplaySpecificBlog
      user={mockUser}
      blog={mockBlog}
      handleSuccessMessage={mockHandleSuccessMessage}
      handleErrorMessage={mockHandleErrorMessage}
      handleUpdates={mockHandleUpdates}
    />,
  );

  const urlElement = container.querySelector(".url");
  const likesElement = container.querySelector(".likes");

  expect(urlElement).not.toBeVisible();
  expect(likesElement).not.toBeVisible();

  const viewButtonElement = await screen.findByText("view");
  await user.click(viewButtonElement);

  expect(urlElement).toBeVisible();
  expect(likesElement).toBeVisible();
});

test("clicking like button twice will call it's handler twice", async () => {
  const user = userEvent.setup();
  const mockHandleSuccessMessage = vi.fn();
  const mockHandleErrorMessage = vi.fn();
  const mockHandleUpdates = vi.fn();

  const mockBlog = {
    title: "test blog",
    url: "https://testBlogUrl.com",
    likes: 7,
    author: {
      name: "L",
      id: "3181979",
    },
  };

  const mockUser = {
    name: "L",
    id: "3181979",
  };

  const { container } = render(
    <DisplaySpecificBlog
      user={mockUser}
      blog={mockBlog}
      handleSuccessMessage={mockHandleSuccessMessage}
      handleErrorMessage={mockHandleErrorMessage}
      handleUpdates={mockHandleUpdates}
    />,
  );

  const urlElement = container.querySelector(".url");
  const likesElement = container.querySelector(".likes");

  expect(urlElement).not.toBeVisible();
  expect(likesElement).not.toBeVisible();

  const viewButtonElement = await screen.findByText("view");
  await user.click(viewButtonElement);

  const likeButtonEelment = await screen.findByText("like");
  expect(likeButtonEelment).toBeVisible();

  await user.click(likeButtonEelment);
  await user.click(likeButtonEelment);

  expect(blogServices.updateBlog).toBeCalledTimes(2);
  expect(mockHandleSuccessMessage).toHaveBeenCalledWith(
    "you liked, test blog",
    3000,
  );
  expect(mockHandleSuccessMessage).toBeCalledTimes(2);
  expect(mockHandleUpdates).toBeCalledTimes(2);
});
