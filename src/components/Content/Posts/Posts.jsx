import React from 'react';
import Post from './Post/Post';


const Posts = () => {
  return (
    <div className="posts">
      <div className="new-post">
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="my-posts">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
export default Posts;