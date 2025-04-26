// src/components/composer/PostComposer.tsx
import React, { useState } from 'react';
import { SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';  // Correct import

const PostComposer = () => {
  const [postContent, setPostContent] = useState("");

  return (
    <div className="post-composer">
      <SelectTrigger className="select-trigger">Select Trigger</SelectTrigger>
      <SelectValue className="select-value">Select Value</SelectValue>
      <SelectContent className="select-content">Select Content</SelectContent>
      <SelectItem className="select-item">Select Item</SelectItem>

      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="Type your post here..."
      />
    </div>
  );
};

export default PostComposer;
