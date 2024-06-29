import axios from 'axios';
export const axiosClient = axios.create({
  baseURL: 'https://caffeinebalance.shop',
  timeout: 5000,
  withCredentials: true,
});
