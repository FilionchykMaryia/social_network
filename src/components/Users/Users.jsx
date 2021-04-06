import React from 'react';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
    for(let i=1; i <= pagesCount; i++){
      pages.push(i);
  }


  return <div>
  {/* <div>
    {pages.map((p, i) => {
      return <span onClick={ (e) => {props.onPageChanged(p)}} className={props.currentPage === p ? 'selected-page' : ''} key={i}> {p} </span>
    })}
    
  </div> */}
 
{
  props.users.map(u => <div key={u.id}>
    <span>
      <div>
        <NavLink to={'/profile/' + u.id}>
          <img className="avatar" src={ u.photos.small != null ? 
          u.photos.small : 
          process.env.PUBLIC_URL +`/img/avatars/3.jpg`} alt="avatar"/>
        </NavLink>
      </div>
      <div>
        {
        u. followed ? 
          <button onClick={() => { 
            axios
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
              withCredentials: true,
              headers: {
                "API-KEY": "613c8864-b9c7-46d2-aa93-16ab9589074d"
              }
            })
            .then(response => {
              if(response.data.resultCode === 0){
                props.unfollow(u.id)
              }
            });
            
            
            }}>
            Unfollow
          </button> 
        : 
          <button onClick={() => { 
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
              withCredentials: true,
              headers: {
                "API-KEY": "613c8864-b9c7-46d2-aa93-16ab9589074d"
            }})
            .then(response => {
              if(response.data.resultCode === 0){
                props.follow(u.id)
              }
            });
            }}>
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
