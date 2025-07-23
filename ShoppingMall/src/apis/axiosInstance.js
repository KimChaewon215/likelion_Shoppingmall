import axios from 'axios';
import { useAuthStore } from '../stores/authStore';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      // TODO: refreshToken으로 재발급 시도(코드 추후에 작성해야함!!)
    }
    return Promise.reject(error);
  }
);

export default instance;
