import { useTheme } from '../../hooks/useTheme';

// Theme Toggle Component - Simple toggle button

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-toggle"
    >
      {theme === 'dark' ? 'light' : 'dark'}
    </button>
  );
};

export default ThemeToggle;
