// src/components/ui/select.tsx
import React, { useState, useCallback } from 'react';
import { difference } from 'lodash';  // Import difference from lodash

interface ComboboxProps {
  options: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  multiple?: boolean;
}

const Combobox: React.FC<ComboboxProps> = ({
  options,
  onChange,
  placeholder = 'Select an option',
  multiple = false,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOptionClick = (value: string) => {
    if (multiple) {
      setSelectedValues((prev) => {
        if (prev.includes(value)) {
          return prev.filter((v) => v !== value);
        } else {
          return [...prev, value];
        }
      });
    } else {
      setSelectedValues([value]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {filteredOptions.map((option) => (
          <li key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Combobox;
