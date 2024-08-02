import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes/";

const getAnecdotes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const postAnecdotes = async (content) => {
  const payload = { content, votes: 0 };
  const response = await axios.post(baseUrl, payload);
  return response.data;
};

const putAnecdotes = async (anecdote) => {
  const url = baseUrl + anecdote.id;
  const payload = {
    ...anecdote,
    votes: anecdote.votes + 1,
  };
  const response = await axios.put(url, payload);
  return response.data;
};

const anecdotesServices = { getAnecdotes, postAnecdotes, putAnecdotes };

export default anecdotesServices;
