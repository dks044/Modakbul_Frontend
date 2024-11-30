import axios from 'axios';
import {API_URL} from '@env';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10초 타임아웃
});

export default instance;
