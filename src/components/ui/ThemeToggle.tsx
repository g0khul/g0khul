import { useTheme } from '../../hooks/useTheme';

// Theme Toggle Component - Simple toggle button

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="bg-transparent border-2 border-current text-sm py-1 px-3 cursor-pointer transition-opacity hover:opacity-70 rounded-none"
    >
      {theme === 'dark' ? 'light' : 'dark'}
    </button>
  );
};

export default ThemeToggle;
