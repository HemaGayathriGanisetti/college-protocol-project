import { api } from './api';

export const getTimetable = async () => {
  const res = await api.get('/timetable');
  return res.data;
};