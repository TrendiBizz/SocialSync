import React, { useState } from 'react';
import { CaptionSelectionProps } from '@/types';

const captions = [
  "Check out our latest updates!",
  "Don't miss this opportunity!",
  "Stay tuned for more exciting news!"
];

const CaptionSelection: React.FC<CaptionSelectionProps> = ({ selectedCaption, onSelect }) => {
  const [currentCaption, setCurrentCaption] = useState(selectedCaption);

  const handleSelect = (caption: string) => {
    setCurrentCaption(caption);
    onSelect(caption);
  };

  return (
    <div className="space-y-2">
      {captions.map((caption) => (
        <button
          key={caption}
          onClick={() => handleSelect(caption)}
          className={\`px-4 py-2 border rounded-lg \${currentCaption === caption ? 'bg-blue-500 text-white' : 'bg-white'}\`}
        >
          {caption}
        </button>
      ))}
    </div>
  );
};

export default CaptionSelection;
