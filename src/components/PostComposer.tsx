import React from "react";

export default function PostComposer() {
  const handlePost = () => {
    alert("Posting to social media!");
  };

  return (
    <button onClick={handlePost}>
      Post
    </button>
  );
}
