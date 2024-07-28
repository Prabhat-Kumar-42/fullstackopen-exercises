import { render } from "@testing-library/react";
import DisplaySpecificBlog from "./DisplaySpecificBlog";
import { expect, test, vi } from "vitest";

test("title", () => {
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
