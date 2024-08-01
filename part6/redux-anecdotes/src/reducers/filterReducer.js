const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload.toLowerCase();
    case "CLEAR_FILTER":
      return "";
    default:
      return state;
  }
};

const setFilter = (payload) => ({
  type: "SET_FILTER",
  payload,
});

const clearFilter = () => ({
  type: "CLEAR_FILTER",
  payload: "",
});

export default filterReducer;

export { setFilter, clearFilter };
