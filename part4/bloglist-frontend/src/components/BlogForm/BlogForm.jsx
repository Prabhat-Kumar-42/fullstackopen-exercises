import { useState } from "react";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import blogServices from "../../services/blogs";
import Header from "../Header/Header";

const BlogForm = ({ blogs, setBlogs }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handlePostBlog = async (event) => {
    event.preventDefault();
    const payload = {
      title,
      url,
    };
    try {
      const response = await blogServices.postBlog(payload);
      const updatedBlog = [...blogs, response];
      console.log(response);
      setBlogs(updatedBlog);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetTitle = (event) => {
    const updatedTitle = event.target.value;
    setTitle(updatedTitle);
  };

  const handleSetUrl = (event) => {
    const updatedUrl = event.target.value;
    setUrl(updatedUrl);
  };

  return (
    <div>
      <Header heading={"Create Blog"} type={3} />
      <form>
        <FormField
          title={"title"}
          inputType={"text"}
          fieldValue={title}
          onEvent={"onChange"}
          handleEvent={handleSetTitle}
        />
        <FormField
          title={"url"}
          inputType={"text"}
          fieldValue={url}
          onEvent={"onChange"}
          handleEvent={handleSetUrl}
        />
        <Button
          title={"submit"}
          onEvent={"onClick"}
          eventHandler={handlePostBlog}
        />
      </form>
    </div>
  );
};

export default BlogForm;
