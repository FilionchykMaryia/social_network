import React from 'react';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {
 
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
    </>
  )
}
export default Profile;