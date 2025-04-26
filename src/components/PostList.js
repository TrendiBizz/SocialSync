// /src/components/PostList.js

import React from 'react';
import { deletePost, updatePost } from '../firebase/firebase'; // Import deletePost and updatePost functions

const PostList = ({ posts }) => {
  const handleDelete = async (postId) => {
    try {
      await deletePost(postId); // Delete post from Firestore
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleUpdate = async (postId, newTitle, newContent) => {
    try {
      await updatePost(postId, newTitle, newContent); // Update post in Firestore
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <button onClick={() => handleUpdate(post.id, 'New Title', 'Updated content')}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
