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
  signup: "/signup",
  login: "/login",
};

const CONSTS = {
  serverUrls,
  clientUrls,
  asyncThunkStatus,
};

export default CONSTS;
