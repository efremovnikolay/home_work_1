import React, { useState, type ReactNode } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const themeStyles: React.CSSProperties =
    theme === 'light'
      ? { backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '1rem' }
      : { backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '1rem' };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
