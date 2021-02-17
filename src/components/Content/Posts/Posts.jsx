import React from 'react';
import Post from './Post';


const Posts = () => {
  return (
    <div className="posts">
      <div className="new-post">
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="my-posts">
        <Post message="Hi, how are you?"/>
        <Post message="It's my first post"/>
        <Post />
        <Post />
      </div>
    </div>
  )
}
export default Posts;