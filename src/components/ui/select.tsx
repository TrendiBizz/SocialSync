// src/components/ui/select.tsx

import React from 'react';

// This is a basic Select component
export const Select = ({ options, onChange }: { options: string[], onChange: (value: string) => void }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
