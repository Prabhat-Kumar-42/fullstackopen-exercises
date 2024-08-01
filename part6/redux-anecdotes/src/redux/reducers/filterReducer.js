import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (state, action) => {
      return action.payload.toLowerCase();
    },
    clearFilter: (state, action) => {
      return "";
    },
  },
});
export default filterSlice.reducer;

export const { setFilter, clearFilter } = filterSlice.actions;

// before using redux-toolkit, just put here as comment to remember
// how much of boiler plate needed to write without it
//
// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "SET_FILTER":
//       return action.payload.toLowerCase();
//     case "CLEAR_FILTER":
//       return "";
//     default:
//       return state;
//   }
// };
//
// const setFilter = (payload) => ({
//   type: "SET_FILTER",
//   payload,
// });
//
// const clearFilter = () => ({
//   type: "CLEAR_FILTER",
//   payload: "",
// });
//
