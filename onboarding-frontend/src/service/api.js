// frontend/src/service/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Assuming backend runs on localhost:5000
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
