import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    upvoteAnecdote: (state, action) => {
      const id = action.payload;
      return state.map((anecdote) =>
        anecdote.id != id
          ? anecdote
          : { ...anecdote, votes: anecdote.votes + 1 },
      );
    },
    addAnecdote: (state, action) => {
      const payload = asObject(action.payload);
      state.push(payload);
      return state;
    },
  },
});

export default anecdoteSlice.reducer;

export const { upvoteAnecdote, addAnecdote } = anecdoteSlice.actions;

// before using redux-toolkit, just put here as comment to remember
// how much of boiler plate needed to write without it
//
// const reducer = (state = initialState, action) => {
//   const payload = action.payload;
//   switch (action.type) {
//     case "UPVOTE":
//       return state.map((anecdote) =>
//         anecdote.id != payload.id
//           ? anecdote
//           : { ...anecdote, votes: anecdote.votes + 1 },
//       );
//     case "ADD":
//       return [...state, payload];
//     default:
//       return state;
//   }
// };
//
// const upvote = (id) => {
//   return {
//     type: "UPVOTE",
//     payload: { id },
//   };
// };
//
// const createAnecdote = (content) => {
//   return {
//     type: "ADD",
//     payload: asObject(content),
//   };
// };
