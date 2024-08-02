import { createSlice } from "@reduxjs/toolkit";
import anecdotesServices from "../../services/anecdotes.services";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    upvote: (state, action) => {
      const updatedAnecdote = action.payload;
      return state.map((anecdote) =>
        anecdote.id != updatedAnecdote.id ? anecdote : updatedAnecdote,
      );
    },
    appendAnecdote: (state, action) => {
      const payload = action.payload;
      state.push(payload);
      return state;
    },
    setAnecdotes: (state, action) => action.payload,
  },
});

const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesServices.getAnecdotes();
    dispatch(setAnecdotes(anecdotes));
  };
};

const addAnecdote = (content) => {
  return async (dispatch) => {
    const postedAnecdote = await anecdotesServices.postAnecdotes(content);
    dispatch(appendAnecdote(postedAnecdote));
  };
};

const upvoteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdotesServices.putAnecdotes(anecdote);
    dispatch(upvote(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;

export const { upvote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export { initializeAnecdotes, addAnecdote, upvoteAnecdote };
