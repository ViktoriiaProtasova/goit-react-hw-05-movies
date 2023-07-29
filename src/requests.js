import axios from 'axios';

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTA1ZGZhMzkwMDIxYjkyZTc3ZDMzYzRhODYyZjRmNiIsInN1YiI6IjY0ODFmZWJmNjQ3NjU0MDBhZDgxYTBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.grPFkj7_KdeogJCliXg4MDIgfDdRvjZd4DM3BdVB2Kw',
  },
};

export const getTrendingMovies = async () => {
  OPTIONS.url = 'https://api.themoviedb.org/3/trending/all/day';
  const { data } = await axios.request(OPTIONS);
  return data;
};

export const getMovieDetails = async movieId => {
  OPTIONS.url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const { data } = await axios.request(OPTIONS);
  return data;
};

export const getCastDetails = async movieId => {
  OPTIONS.url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const { data } = await axios.request(OPTIONS);
  return data;
};

export const getReviewsDetails = async movieId => {
  OPTIONS.url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const { data } = await axios.request(OPTIONS);
  return data;
};

export const getSearchQuery = async search => {
  OPTIONS.url = `https://api.themoviedb.org/3/search/movie`;
  OPTIONS.params = { query: `${search}` };
  const { data } = await axios.request(OPTIONS);
  return data;
};
