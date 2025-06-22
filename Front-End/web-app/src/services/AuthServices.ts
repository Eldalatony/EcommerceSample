import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const login = (data: any) => axios.post(`${API_URL}/login`, data);
export const register = (data: any) => axios.post(`${API_URL}/register`, data);
