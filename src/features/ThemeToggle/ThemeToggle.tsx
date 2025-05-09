'use client'

import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button className='cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'light' ? '🗿' : '💻'}
    </button>
  );
};

