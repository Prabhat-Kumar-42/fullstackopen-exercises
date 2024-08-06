import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes/";

const getAllAnecdotes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const postAnecdote = async (anecdote) => {
  const payload = {
    content: anecdote,
    votes: 0,
  };

  const response = await axios.post(baseUrl, payload);
  return response.data;
};

const updateAnecdote = async (anecdote) => {
  const url = baseUrl + anecdote.id;
  const response = await axios.put(url, anecdote);
  return response.data;
};

const anecdoteServices = {
  getAllAnecdotes,
  postAnecdote,
  updateAnecdote,
};

export default anecdoteServices;
