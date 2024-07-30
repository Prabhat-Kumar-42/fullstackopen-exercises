import { useRef, useState } from "react";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import blogServices from "../../services/blogs";
import Header from "../Header/Header";
import Toggleable from "../Toggleable/Toggleable";
import PropTypes from "prop-types";

const BlogForm = ({
  blogs,
  setBlogs,
  handleSuccessMessage,
  handleErrorMessage,
}) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const displayRef = useRef();

  const handlePostBlog = async (event) => {
    event.preventDefault();
    const payload = {
      title,
      url,
    };
    try {
      const response = await blogServices.postBlog(payload);
      const updatedBlog = [...blogs, response];
      setBlogs(updatedBlog);
      const message = `${response.title} by ${response.author.name} created.`;
      handleSuccessMessage(message, 3000);
      displayRef.current.hideVisibility();
    } catch (error) {
      console.log(error);
      handleErrorMessage("Blog Creation Failed", 3000);
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

  const toDisplayTitle = "create new blog";
  const toHideTitle = "cancle";

  return (
    <div>
      <Toggleable
        toDisplayTitle={toDisplayTitle}
        toHideTitle={toHideTitle}
        ref={displayRef}
      >
        <Header heading={"Create Blog"} type={3} />
        <form data-testid={"blogForm"}>
          <FormField
            title={"title"}
            inputType={"text"}
            fieldValue={title}
            onEvent={"onChange"}
            handleEvent={handleSetTitle}
            testid={"blogFormTitleField"}
          />
          <FormField
            title={"url"}
            inputType={"text"}
            fieldValue={url}
            onEvent={"onChange"}
            handleEvent={handleSetUrl}
            testid={"blogFormUrlField"}
          />
          <Button
            title={"submit"}
            buttonType={"submit"}
            onEvent={"onClick"}
            eventHandler={handlePostBlog}
            testid={"postBlogButton"}
          />
        </form>
      </Toggleable>
    </div>
  );
};

BlogForm.propTypes = {
  blogs: PropTypes.array.isRequired,
  setBlogs: PropTypes.func.isRequired,
  handleSuccessMessage: PropTypes.func.isRequired,
  handleErrorMessage: PropTypes.func.isRequired,
};
export default BlogForm;
