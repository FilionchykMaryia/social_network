import React from 'react';
import Posts from './Posts/Posts';
import Profile from './Profile/Profile';

const Content = () => {
  return (
    <div className="content">
      <div className="content-banner__img"></div>
      <Profile />
      <Posts />
    </div>
  )
}
export default Content;