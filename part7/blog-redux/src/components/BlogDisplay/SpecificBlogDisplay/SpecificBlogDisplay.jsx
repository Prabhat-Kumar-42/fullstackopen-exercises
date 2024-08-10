import "./blogStyle.css";

const SpecificBlogDisplay = ({ blog }) => {
  return (
    <div className="blogStyle">
      <div>title: {blog.title}</div>
      <div>user/author: {blog.author.name}</div>
    </div>
  );
};

export default SpecificBlogDisplay;
