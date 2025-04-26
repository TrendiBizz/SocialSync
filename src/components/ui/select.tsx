// src/components/ui/select.tsx
import React, { FC } from 'react';

// Utility function for classnames
export const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Correctly exporting the components
export const SelectTrigger: FC<{ className: string; children: React.ReactNode }> = ({ children, className }) => (
  <div className={cn(className)}>{children}</div>
);

export const SelectValue: FC<{ className: string; children: React.ReactNode }> = ({ children, className }) => (
  <div className={cn(className)}>{children}</div>
);

export const SelectContent: FC<{ className: string; children: React.ReactNode }> = ({ children, className }) => (
  <div className={cn(className)}>{children}</div>
);

export const SelectItem: FC<{ className: string; children: React.ReactNode }> = ({ children, className }) => (
  <div className={cn(className)}>{children}</div>
);
