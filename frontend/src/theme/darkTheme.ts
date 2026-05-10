 import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

export const useTheme = () => {
  const { darkMode } = useContext(SettingsContext);

  return {
    backgroundColor: darkMode ? '#0f172a' : '#fff',
    textColor: darkMode ? '#fff' : '#000',
  };
};