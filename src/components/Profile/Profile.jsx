import React from 'react';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {
  
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText}
      updateNewPostText={props.updateNewPostText}/>
    </>
  )
}
export default Profile;