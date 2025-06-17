// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.premios.lojaperfeita.com',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  console.log('Token atual:', token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
