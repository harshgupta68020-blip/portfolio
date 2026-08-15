// Global easing per Design System: [0.22, 1, 0.36, 1]
export const easeCinematic = [0.22, 1, 0.36, 1];

export const heroEntry = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCinematic },
  },
};

export const heroStaggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCinematic },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const reveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeCinematic },
  },
};

export const cardHoverProps = {
  whileHover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: easeCinematic },
  },
};

export const aboutPanelVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeCinematic },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5, ease: easeCinematic },
  },
};

export const noteCardHoverProps = (index = 0) => ({
  whileHover: {
    y: -8,
    rotate: index % 2 === 0 ? 1 : -1,
    transition: { duration: 0.3, ease: easeCinematic },
  },
});

