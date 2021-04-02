import React from 'react';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i=1; i <= pagesCount; i++){
      pages.push(i);
    }

  return <div>
  <div>
    {pages.map(p => {
      return <span onClick={ (e) => {props.onPageChanged(p)}} className={props.currentPage === p && 'selected-page'}>{p}</span>
    })}
    
  </div>
{
  props.users.map(u => <div key={u.id}>
    <span>
      <div>
        <img className="avatar" src={ u.photos.small != null ? 
        u.photos.small : 
        process.env.PUBLIC_URL +`/img/avatars/3.jpg`} alt="avatar"/>
      </div>
      <div>
        {
        u. followed ? 
          <button onClick={() => { props.unfollow(u.id)}}>
            Unfollow
          </button> 
        : 
          <button onClick={() => { props.follow(u.id)}}>
            Follow
          </button>
        }
      </div>
    </span>
    <span>
      <span>
        <span>{u.name}</span>
        <span>{u.status}</span>
      </span>
      <span>
        <span>{"u.location.country"}</span>
        <span>{"u.location.city"}</span>
      </span>
    </span>
  </div>)
}
</div>
}

export default Users;
