import React from 'react';

interface PostComposerProps {
  children: React.ReactNode;
  className: string;
}

const PostComposer = ({ children, className }: PostComposerProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default PostComposer;
