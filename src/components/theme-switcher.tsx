'use client';

import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { WbSunny, NightlightRound } from '@mui/icons-material';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure the component is client-side before accessing localStorage
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="flex items-center">
      <IconButton onClick={toggleTheme} color={theme === 'light' ? 'primary' : 'default'}>
        {theme === 'light' ? <WbSunny /> : <NightlightRound />}
      </IconButton>
    </div>
  );
}
