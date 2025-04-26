// src/lib/utils.ts

// Utility function to join class names conditionally
export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};
