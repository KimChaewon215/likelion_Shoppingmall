import axiosInstance from './instance';

export default async function login(code) {
  const { data } = await axiosInstance.post('/auth/kakao', { code });
  return data; 
}