import React from 'react';


const Post = (props) => {
  return (
        <div className="my-posts__item">
          <img  className="avatar" src={process.env.PUBLIC_URL +`/img/avatar.png`} />
          <div>
            <div>{props.message}</div>
            <span>Like</span>
          </div>
          
        </div>
  )
}
export default Post;