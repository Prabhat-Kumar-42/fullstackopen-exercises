const userBaseUrl = "/api/users";
const blogBaseUrl = "/api/blogs";

const asyncThunkStatus = {
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
};

const urls = {
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

const CONSTS = {
  urls,
  asyncThunkStatus,
};

export default CONSTS;
