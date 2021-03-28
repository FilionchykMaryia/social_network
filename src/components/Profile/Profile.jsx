import React from 'react';
import MyPosts from './MyPosts';
import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {

  return (
    <>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </>
  )
}
export default Profile;