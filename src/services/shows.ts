import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchShowsByTerm = (term: string) => api.get('/show', {
  params: { term },
});

export const fetchRandomEpisode = (showIds: number[]) => api.get('/random', {
  params: { showIds: showIds.join(',') },
});

export default api;
