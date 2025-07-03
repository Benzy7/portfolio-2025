import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function useThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return {
    mounted,
    resolvedTheme,
    toggleTheme
  };
}