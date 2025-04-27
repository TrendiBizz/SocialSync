import React, { FC } from 'react';
import { ComboboxProps } from '../../types';

export const Combobox: FC<ComboboxProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
