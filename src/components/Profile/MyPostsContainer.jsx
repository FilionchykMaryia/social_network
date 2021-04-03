import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPost } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) =>{
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}


const MyPostsContainer = connect(mapStateToProps, {updateNewPost, addPost})(MyPosts);

export default MyPostsContainer;