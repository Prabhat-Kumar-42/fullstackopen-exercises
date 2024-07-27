import "./style.css";

import { useRef } from "react";
import Toggleable from "../../Toggleable/Toggleable";

const DisplaySpecificBlog = ({ blog }) => {
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
        <p>ikes: {blog.likes}</p>
        <p>
          authorNotice:{" "}
          <Toggleable
            toDisplayTitle={toDisplayAuthorNotice}
            toHideTitle={toHideAuthorNotice}
            ref={noticeRef}
          >
            <p>{notice}</p>
          </Toggleable>
        </p>
      </Toggleable>
    </div>
  );
};

export default DisplaySpecificBlog;
