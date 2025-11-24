import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

// Theme Toggle Component - Simple toggle button

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: -10 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="bg-transparent border-2 border-current text-sm py-1 px-3 cursor-pointer transition-opacity hover:opacity-70 rounded-none"
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </motion.div>
  );
};

export default ThemeToggle;
