// src/components/ui/label.tsx

import React from 'react';

interface LabelProps {
  text: string | undefined;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return <label>{text || ''}</label>;  // Fallback to empty string if `text` is undefined
};

export default Label;
