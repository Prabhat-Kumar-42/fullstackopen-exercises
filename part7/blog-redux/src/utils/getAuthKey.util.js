const getAuthKey = () => {
  const authKey = localStorage.getItem("authToken");
  return authKey;
};

export default getAuthKey;
