const userBaseUrl = "/api/users";
const blogBaseUrl = "/api/blogs";

const asyncThunkStatus = {
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
};

const serverUrls = {
  user: {
    baseUrl: userBaseUrl,
    loginUrl: `${userBaseUrl}/"login`,
    signupUrl: `${userBaseUrl}/"signup`,
  },
  blog: {
    baseUrl: blogBaseUrl,
    getBlogUrl: (blogId) => `${blogBaseUrl}/${blogId}`,
  },
};

const clientUrls = {
  home: "/",
  blogs: "/blogs",
  specificBlog: "/blogs/:id",
  signup: "/signup",
  login: "/login",
  users: "/users",
  specificUser: "/users/:id",
};

const CONSTS = {
  serverUrls,
  clientUrls,
  asyncThunkStatus,
};

export default CONSTS;
