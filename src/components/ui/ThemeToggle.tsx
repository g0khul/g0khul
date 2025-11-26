import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { hoverAnimation, tapAnimation, itemTransition } from "../../config/animations";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      transition={itemTransition}
    >
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="bg-transparent border-2 border-current text-sm py-1 px-3 cursor-pointer hover:opacity-70 transition-opacity"
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </motion.div>
  );
};

export default ThemeToggle;
