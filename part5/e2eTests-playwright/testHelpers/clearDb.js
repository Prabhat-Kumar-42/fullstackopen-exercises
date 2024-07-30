const axios = require("axios");

const clearDb = async () => {
  try {
    const resetDbUrl = "http://localhost:5173/api/test/reset";
    await axios.delete(resetDbUrl);
    return true;
  } catch (err) {
    console.log(err);
    console.log("clear db error");
  }
};

module.exports = {
  clearDb,
};
