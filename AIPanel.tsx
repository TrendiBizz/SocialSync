// src/components/AIPanel.tsx
import React from 'react';
import { SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';  // Correct import

const AIPanel = () => {
  return (
    <div className="ai-panel">
      <SelectTrigger className="select-trigger">Select Trigger</SelectTrigger>
      <SelectValue className="select-value">Select Value</SelectValue>
      <SelectContent className="select-content">Select Content</SelectContent>
      <SelectItem className="select-item">Select Item</SelectItem>
    </div>
  );
};

export default AIPanel;
