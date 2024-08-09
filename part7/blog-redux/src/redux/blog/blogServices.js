import useResources from "../../hooks/useResources";
import CONSTS from "../../utils/config.util";

const baseUrl = CONSTS.serverUrls.blog.baseUrl;

const blogService = (() => {
  const { create, update, remove, resources } = useResources(baseUrl);

  return {
    createBlog: (payload) => create(payload),
    updateBlog: (blog) => update(blog),
    deleteBlog: (blog) => remove(blog),
    getAllBlogs: () => resources,
  };
})();

export default blogService;
