import React from 'react';
import MyPosts from './MyPosts';
import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {

  return (
    <>
      <ProfileInfo />
      <MyPostsContainer />
    </>
  )
}
export default Profile;