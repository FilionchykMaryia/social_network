import React from 'react';


const Post = (props) => {
  return (
        <div className="my-posts__item">
          <img src="https://cs8.pikabu.ru/avatars/2415/x2415216-29774323.png" />
          <div>
            <div>{props.message}</div>
            <span>Like</span>
          </div>
          
        </div>
  )
}
export default Post;