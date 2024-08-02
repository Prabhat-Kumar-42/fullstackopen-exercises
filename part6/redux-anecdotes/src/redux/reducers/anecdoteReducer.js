import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    upvoteAnecdote: (state, action) => {
      const updatedAnecdote = action.payload;
      return state.map((anecdote) =>
        anecdote.id != updatedAnecdote.id ? anecdote : updatedAnecdote,
      );
    },
    addAnecdote: (state, action) => {
      const payload = action.payload;
      state.push(payload);
      return state;
    },
    setAnecdotes: (state, action) => action.payload,
  },
});

export default anecdoteSlice.reducer;

export const { upvoteAnecdote, addAnecdote, setAnecdotes } =
  anecdoteSlice.actions;
