import axios from 'axios';
import { useAuthStore } from '../stores/useAuthStore';

export const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', 
  headers: {
    'Content-Type': 'application/json',
  }, 
});
