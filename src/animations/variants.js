// Global easing: [0.22, 1, 0.36, 1]
export const easeCinematic = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCinematic },
  },
};

export const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const reveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeCinematic },
  },
};
