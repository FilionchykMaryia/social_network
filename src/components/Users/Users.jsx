import React from 'react';

const Users = (props) => {
  if(props.users.length === 0){
    props.setUsers([ 
      {id: 1, photoUrl: '2.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
      {id: 2, photoUrl: '5.jpg', followed: true, fullName: 'Katya', status: 'I am a lady', location: {city: 'Moscow', country: 'Russia'}},
      {id: 3, photoUrl: '8.jpg', followed: false, fullName: 'Andry', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
      {id: 4, photoUrl: '7.jpg', followed: true, fullName: 'Sofia', status: 'I am a little boss', location: {city: 'Grodno', country: 'Belarus'}},
    ])
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img className="avatar" src={process.env.PUBLIC_URL +`/img/avatars/${u.photoUrl}`} alt=""/>
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
            <span>{u.fullName}</span>
            <span>{u.status}</span>
          </span>
          <span>
            <span>{u.location.country}</span>
            <span>{u.location.city}</span>
          </span>
        </span>
      </div>)
    }
  </div>
}
export default Users;