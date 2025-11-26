import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuGhost } from "react-icons/lu";
import ThemeToggle from "../ui/ThemeToggle";
import { navRoutes } from "../../config/routes";
import {
  hoverAnimation,
  tapAnimation,
  itemTransition,
  menuAnimation,
  menuItemAnimation,
  appleEase,
} from "../../config/animations";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="pb-6 mb-6">
      <div className="flex justify-between items-center">
        <motion.div
          whileHover={hoverAnimation}
          whileTap={tapAnimation}
          transition={itemTransition}
        >
          <Link to="/" className="text-xl font-semibold no-underline">
            <LuGhost />
          </Link>
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {navRoutes.map((route) => (
            <motion.div
              key={route.path}
              whileHover={hoverAnimation}
              whileTap={tapAnimation}
              transition={itemTransition}
            >
              <Link
                to={route.path}
                className="no-underline text-base hover:opacity-70 transition-opacity"
              >
                {route.label}
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
        </div>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 bg-transparent border-0 cursor-pointer w-10 h-10"
          aria-label="Toggle menu"
          whileTap={hoverAnimation}
        >
          <motion.span
            className="block w-6 h-0.5 bg-current"
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 4 : 0 }}
            transition={itemTransition}
          />
          <motion.span
            className="block w-6 h-0.5 bg-current"
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.2, ease: appleEase }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-current"
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -4 : 0 }}
            transition={itemTransition}
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={menuAnimation.initial}
            animate={menuAnimation.animate}
            exit={menuAnimation.exit}
            transition={menuAnimation.transition}
            className="md:hidden flex flex-col gap-4 mt-6 pt-6 border-t-2 border-current overflow-hidden"
          >
            {navRoutes.map((route, index) => (
              <motion.div
                key={route.path}
                initial={menuItemAnimation.initial}
                animate={menuItemAnimation.animate}
                exit={menuItemAnimation.exit}
                transition={{ duration: 0.3, delay: index * 0.1, ease: appleEase }}
                whileTap={tapAnimation}
              >
                <Link
                  to={route.path}
                  className="no-underline text-base hover:opacity-70 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={menuItemAnimation.initial}
              animate={menuItemAnimation.animate}
              exit={menuItemAnimation.exit}
              transition={{ duration: 0.3, delay: navRoutes.length * 0.1, ease: appleEase }}
              className="pt-2"
            >
              <ThemeToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
