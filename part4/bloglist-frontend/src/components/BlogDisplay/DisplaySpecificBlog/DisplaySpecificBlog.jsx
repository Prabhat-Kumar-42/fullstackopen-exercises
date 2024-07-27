import "./style.css";

import { useRef } from "react";
import Toggleable from "../../Toggleable/Toggleable";
import blogServices from "../../../services/blogs";
import Button from "../../Button/Button";

const DisplaySpecificBlog = ({
  user,
  blog,
  handleSuccessMessage,
  handleErrorMessage,
  handleUpdates,
}) => {
  const notice = ` when i started the exericese from previous parts, 
    I had set user/poster as the author of the blog.
    So likes and url are the only field left to display, 
    rather all other functionality works `;

  const blogRef = useRef();
  const noticeRef = useRef();

  const toDisplayTitle = "view";
  const toHideTitle = "hide";
  const toDisplayAuthorNotice = "show author notice";
  const toHideAuthorNotice = "close author notice";

  const updateLike = async () => {
    const likes = blog.likes + 1;
    const payload = { likes };
    try {
      await blogServices.updateBlog(blog, payload);
      handleUpdates();
      const successMessage = `you liked, ${blog.title}`;
      handleSuccessMessage(successMessage, 3000);
    } catch (error) {
      console.log(error);
      const newErrorMessage = error.response.data.error;
      handleErrorMessage(newErrorMessage, 3000);
    }
  };

  const deleteBlog = async () => {
    try {
      const removeMessage = `remove blog "${blog.title}" by "${blog.author.name}" ?`;
      if (window.confirm(removeMessage)) {
        await blogServices.deleteBlog(blog);
        handleSuccessMessage("deletion successfull", 3000);
        handleUpdates();
      }
    } catch (error) {
      console.log(error);
      const newErrorMessage = error.response.data.error;
      handleErrorMessage(newErrorMessage, 3000);
    }
  };

  const displayDeleteButton = () => {
    if (blog.author.id !== user.id) return null;
    return (
      <Button
        buttonType={"submit"}
        title={"remove"}
        onEvent={"onClick"}
        eventHandler={deleteBlog}
      />
    );
  };

  return (
    <div className="blogStyle">
      <p>title: {blog.title}</p>
      <p>user/author: {blog.author.name} </p>
      <Toggleable
        toDisplayTitle={toDisplayTitle}
        toHideTitle={toHideTitle}
        ref={blogRef}
      >
        <p>url: {blog.url}</p>
        <p>
          likes: {blog.likes}
          <Button
            buttonType={"submit"}
            title={"like"}
            onEvent={"onClick"}
            eventHandler={updateLike}
          />
        </p>
        authorNotice:{" "}
        <Toggleable
          toDisplayTitle={toDisplayAuthorNotice}
          toHideTitle={toHideAuthorNotice}
          ref={noticeRef}
        >
          {notice}
        </Toggleable>
        {displayDeleteButton()}
      </Toggleable>
    </div>
  );
};

export default DisplaySpecificBlog;