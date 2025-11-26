export const appleEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const pageTransition = {
  duration: 0.5,
  ease: appleEase,
};

export const hoverAnimation = {
  scale: 1.5,
  rotate: -10,
};

export const tapAnimation = {
  scale: 0.95,
};

export const itemTransition = {
  duration: 0.3,
  ease: appleEase,
};

export const menuAnimation = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" as const },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.4, ease: appleEase },
};

export const menuItemAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const taglineAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const taglineTransition = {
  duration: 0.5,
  ease: appleEase,
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

export const hoverSlide = { x: 5 };
