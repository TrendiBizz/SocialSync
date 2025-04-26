// src/lib/utils.ts

// Export cn function used for handling classNames
export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};
