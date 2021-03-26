import React from 'react';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {
  
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
    </>
  )
}
export default Profile;