import axios from 'axios';
import { makeServer } from './mock';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
