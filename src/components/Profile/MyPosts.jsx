import React from 'react';
import Post from './Post';


const MyPosts = (props) => {

  let posts = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

  return (
    <div className="posts">
      <h3>My posts</h3>
      <div className="new-post">
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        
      </div>
      <div className="my-posts">
        {posts}
      </div>
    </div>
  )
}
export default MyPosts;