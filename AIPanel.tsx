import React from 'react';

interface AIPanelProps {
  children: React.ReactNode;
  className: string;
}

const AIPanel = ({ children, className }: AIPanelProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default AIPanel;
