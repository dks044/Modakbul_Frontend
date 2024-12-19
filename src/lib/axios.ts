import axios from 'axios';
import {API_URL} from '@env';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10초 타임아웃
});

export default axiosInstance;
