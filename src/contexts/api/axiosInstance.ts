import axios from 'axios';
import {API_KEY} from '@env';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: API_KEY,
  },
  timeout: 10000,
});

export default axiosInstance;
