import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const toggleablesSlice = createSlice({
  name: "toggleableComponents",
  initialState,
  reducers: {
    addState: (state, action) => {
      const { toggleRef, value } = action.payload;
      state[toggleRef] = value;
    },
    toggleOnState: (state, action) => {
      const { toggleRef } = action.payload;
      state[toggleRef] = true;
    },
    toggleOffState: (state, action) => {
      const { toggleRef } = action.payload;
      state[toggleRef] = false;
    },
  },
});

const toggleablesActions = toggleablesSlice.actions;
const toggleablesReducer = toggleablesSlice.reducer;

export { toggleablesActions };

export default toggleablesReducer;
