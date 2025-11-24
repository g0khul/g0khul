// Apple-like easing curve (typed as tuple for framer-motion)
export const appleEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

// Page transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

// Page transition timing
export const pageTransition = {
  duration: 0.5,
  ease: appleEase,
};

// Hover animation for nav/footer items
export const hoverAnimation = {
  scale: 1.5,
  rotate: -10,
};

// Tap animation for mobile
export const tapAnimation = {
  scale: 0.95,
};

// Standard transition for interactive elements
export const itemTransition = {
  duration: 0.3,
  ease: appleEase,
};

// Mobile menu animation
export const menuAnimation = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" as const },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.4, ease: appleEase },
};

// Menu item stagger animation
export const menuItemAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};
