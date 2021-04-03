import React from 'react';
import Post from './Post';


const MyPosts = (props) => {

  let posts = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text);
  }

  return (
    <div className="posts">
      <h3>My posts</h3>
      <div className="new-post">
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={ onAddPost }>Add post</button>
        </div>
        
      </div>
      <div className="my-posts">
        {posts}
      </div>
    </div>
  )
}
export default MyPosts;