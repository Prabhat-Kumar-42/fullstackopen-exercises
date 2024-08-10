import CONSTS from "../../utils/config.util";
import serverServices from "./serverServices.util";

const blogService = (() => {
  const blogBaseUrl = CONSTS.serverUrls.blog.baseUrl;

  const {
    baseUrl,
    create,
    update,
    remove,
    getSpecificResource,
    getAllResource,
  } = serverServices(blogBaseUrl);

  const getAllBlogs = async () => {
    return await getAllResource();
  };

  const createBlog = async (blog) => {
    return await create(blog);
  };

  const updateBlog = async (blog) => {
    return await update(blog);
  };

  const deleteBlog = async (blog) => {
    return await remove(blog);
  };

  const getSpecificBlog = async (blog) => {
    return await getSpecificResource(blog);
  };

  return {
    baseUrl,
    getAllBlogs,
    getSpecificBlog,
    createBlog,
    updateBlog,
    deleteBlog,
  };
})();

export default blogService;
