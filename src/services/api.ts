import axios from 'axios';
import { AuthResponse, SignUpData, LoginData } from '../types/auth';

const API_URL = 'http://localhost:3000/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = async (data: SignUpData): Promise<void> => {
  await api.post('/auth/email/register', data);
};

export const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/email/login', data);
  return response.data;
};

export const setAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  delete api.defaults.headers.common['Authorization'];
};

export default api;
