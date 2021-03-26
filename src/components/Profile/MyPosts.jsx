import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/profile-reducer';

import Post from './Post';


const MyPosts = (props) => {

  let posts = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text);
    // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
  }

  return (
    <div className="posts">
      <h3>My posts</h3>
      <div className="new-post">
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
        
      </div>
      <div className="my-posts">
        {posts}
      </div>
    </div>
  )
}
export default MyPosts;