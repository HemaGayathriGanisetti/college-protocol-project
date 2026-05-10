 import { api } from './api';

 export const getAllRules = async () => {
  const res = await api.get('/rules');
  return res.data;
};

// Get rules by category ID (IMPORTANT FIX)
export const getRulesByCategory = async (categoryId: number) => {
  const res = await api.get(`/rules/categories/${categoryId}`);
  return res.data;
};

export const searchRules = async (query: string) => {
  const res = await api.get(`/rules/search?q=${query}`);
  return res.data;
};