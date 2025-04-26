import React, { FC, ReactNode } from 'react';

export interface SelectProps {
  children?: ReactNode;
  [key: string]: any;
}

const Select: FC<SelectProps> = ({ children, ...rest }) => (
  <select {...rest}>{children}</select>
);

export const SelectTrigger: FC<SelectProps> = ({ children, ...rest }) => (
  <select {...rest}>{children}</select>
);

export const SelectValue: FC<SelectProps> = ({ children, ...rest }) => (
  <span {...rest}>{children}</span>
);

export const SelectContent: FC<SelectProps> = ({ children, ...rest }) => (
  <div {...rest}>{children}</div>
);

export const SelectItem: FC<SelectProps & { value: string }> = ({
  children,
  value,
  ...rest
}) => (
  <option value={value} {...rest}>
    {children}
  </option>
);

export default Select;
